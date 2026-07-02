/**
 * Generate brief descriptions for all stdlib symbols that lack them.
 * Reads symbols.json, produces enriched stdlib-docs.json.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const symbols = JSON.parse(
  fs.readFileSync(path.join(root, "src", "data", "symbols.json"), "utf8")
);
const existing = JSON.parse(
  fs.readFileSync(path.join(root, "src", "data", "stdlib-docs.json"), "utf8")
);

// ── Module descriptions (add if missing) ───────────────────────
const moduleDescriptions = {
  float: "Built-in float conversion primitive. Converts an integer to its floating-point representation.",
  int: "Built-in integer identity/conversion primitive. Returns the integer value unchanged.",
  len: "Built-in length primitive. Returns the number of elements in a collection or characters in a string.",
  string: "Built-in string conversion primitive. Converts a value to its string representation.",
  ori: "Core language runtime module. Provides fundamental runtime operations.",
  "ori.Error": "Core error type for the Ori runtime. Represents structured error values with code and message.",
  "ori.atomic": "Atomic operations for lock-free concurrent value access. Provides atomic load, store, and add operations.",
  "ori.bytes.algorithms":
    "Byte buffer comparison and prefix-checking algorithms.",
  "ori.bytes.utils":
    "Byte buffer utility helpers. Provides convenience wrappers for common byte operations.",
  "ori.channel":
    "Channel-based message passing for concurrent communication between tasks.",
  "ori.concurrent":
    "Concurrency primitives for shared-state coordination between tasks.",
  "ori.concurrent.utils":
    "Concurrency utility helpers. Provides typed copy and transfer operations for concurrent-safe values.",
  "ori.convert":
    "Type conversion primitives between basic types (bool, float, string, int).",
  "ori.convert.utils":
    "Safe type conversion utilities with fallback default values.",
  "ori.core":
    "Core runtime internals. Low-level primitives used by the language runtime.",
  "ori.deque":
    "Double-ended queue (deque) data structure. Supports efficient insertion and removal from both ends.",
  "ori.deque.utils":
    "Deque utility helpers with typed convenience wrappers for int-typed deques.",
  "ori.doubly_linked_list":
    "Doubly-linked list data structure. Supports bidirectional traversal, cursor-based navigation, and O(1) insertion/removal at known positions.",
  "ori.doubly_linked_list.utils":
    "Doubly-linked list utility helpers with typed wrappers for int-typed lists.",
  "ori.files":
    "Low-level file descriptor operations. Internal module for file handle management.",
  "ori.format": 
    "Value formatting primitives for rendering numbers, dates, bytes, and other types as human-readable strings.",
  "ori.format.utils":
    "Format utility helpers. Provides additional formatting functions with custom parameters.",
  "ori.fs.utils":
    "File system utility helpers. Provides convenience wrappers with fallback defaults for common file operations.",
  "ori.graph": "Graph data structure. Supports directed and weighted graphs with BFS, DFS, shortest path, topological sort, and cycle detection.",
  "ori.graph.algorithms": "Graph algorithms. Provides path reachability, connectivity checks, and reachability counting.",
  "ori.graph.utils": "Graph utility helpers.",
  "ori.hash_table": "Hash table (key-value store) data structure. Provides O(1) average-case insertion, lookup, and deletion of key-value pairs.",
  "ori.hash_table.utils": "Hash table utility helpers with typed convenience wrappers for string-keyed integer-value maps.",
  "ori.heap": "Binary heap (priority queue) data structure. Supports efficient insertion and extraction of the highest-priority element.",
  "ori.heap.utils": "Heap utility helpers with typed convenience wrappers for int-typed heaps.",
  "ori.io.utils":
    "I/O utility helpers. Provides convenience wrappers for printing and reading with fallback defaults.",
  "ori.iter":
    "Iterator functional operations. Provides map, filter, reduce, sort, and other higher-order functions for sequences.",
  "ori.iter.utils":
    "Iterator utility helpers. Provides convenience functions for common iterator patterns on int sequences.",
  "ori.json.utils":
    "JSON utility helpers. Provides convenience wrappers for reading and writing JSON files.",
  "ori.lazy": 
    "Lazy evaluation primitives. Defers computation until the value is first accessed.",
  "ori.linked_list": 
    "Singly-linked list data structure. Supports O(1) insertion at head, cursor-based traversal, and sequential access patterns.",
  "ori.linked_list.utils":
    "Linked list utility helpers with typed wrappers for int-typed lists.",
  "ori.list.algorithms":
    "List algorithms. Provides specialized operations like binary search, equality checks, and aggregation on int-typed lists.",
  "ori.list.utils":
    "List utility helpers. Provides convenience accessors with fallback defaults.",
  "ori.map.algorithms":
    "Map algorithms. Provides batch operations like merging, inversion, key counting, and value aggregation on typed maps.",
  "ori.map.utils":
    "Map utility helpers. Provides convenience accessors with fallback defaults for map lookups.",
  "ori.math.algorithms":
    "Mathematical algorithms. Provides advanced numeric operations like clamping, interpolation, and approximation.",
  "ori.math.utils":
    "Math utility helpers. Provides additional numeric functions with type-specific variants.",
  "ori.mem": 
    "Memory management primitives. Provides low-level allocation and deallocation operations.",
  "ori.net.utils":
    "Network utility helpers. Provides convenience wrappers for connection management with fallback defaults.",
  "ori.os": 
    "Operating system interaction primitives. Provides access to environment variables, process info, platform detection, and directory navigation.",
  "ori.os.utils":
    "OS utility helpers. Provides convenience wrappers with fallback defaults for platform and environment queries.",
  "ori.process": "System process execution. Provides functions to run shell commands and capture their output.",
  "ori.process.utils": "Process utility helpers. Provides convenience accessors for process execution results.",
  "ori.queue": "FIFO queue data structure. Supports enqueue, dequeue, and peek operations.",
  "ori.queue.utils": "Queue utility helpers with typed convenience wrappers for int and string queues.",
  "ori.random": "Pseudorandom number generation. Provides integer, float, and boolean random values with optional seeding.",
  "ori.random.utils": "Random utility helpers. Provides additional random generation functions including seeded generators and collection shuffling.",
  "ori.set": "Set collection data structure. Stores unique elements with efficient membership testing, union, intersection, and difference operations.",
  "ori.set.algorithms": "Set algorithms. Provides batch operations like union, intersection, difference, and disjoint checks on typed sets.",
  "ori.set.utils": "Set utility helpers. Provides convenience functions for set membership testing and construction.",
  "ori.stack": "LIFO stack data structure. Supports push, pop, and peek operations.",
  "ori.stack.utils": "Stack utility helpers with typed convenience wrappers for int and string stacks.",
  "ori.string.algorithms":
    "String algorithms. Provides comparison, joining, repetition, and truncation operations.",
  "ori.string.utils":
    "String utility helpers. Provides additional string operations for case conversion, counting, padding, and text analysis.",
  "ori.task": 
    "Async task management. Provides spawning, joining, cancellation, and coordination of asynchronous computations.",
  "ori.test": 
    "Test assertion primitives. Provides functions for comparing values, checking allocations, and managing test execution.",
  "ori.test.utils":
    "Test utility helpers. Provides convenience assertion wrappers for common equality and boolean checks.",
  "ori.time.utils":
    "Time utility helpers. Provides arithmetic operations on durations and convenience functions for time conversion.",
  "ori.tree": 
    "Tree data structure. Supports hierarchical node management with pre-order, post-order, and breadth-first traversals.",
  "ori.tree.algorithms":
    "Tree algorithms. Provides queries for leaf detection, leaf counting, depth calculation, and value collection.",
  "ori.validate": 
    "Input validation primitives. Provides predicates for checking ranges, emptiness, lengths, and custom conditions.",
};

// ── Symbol description rules ────────────────────────────────────
// Pattern-based description generator using name, module, signature.

function inferType(sig) {
  // Extract return type from signature
  const m = sig.match(/->\s*(.+)$/);
  return m ? m[1].trim() : "unknown";
}

function inferParams(sig) {
  // Extract parameter types
  const m = sig.match(/^\((.+)\)\s*->/);
  if (!m) return [];
  return m[1].split(",").map((p) => p.trim());
}

function describeSymbol(sym) {
  const name = sym.name;
  const mod = sym.module;
  const sig = sym.signature;
  const layer = sym.layer;
  const ret = inferType(sig);
  const params = inferParams(sig);

  // ── Collection primitives ──
  if (name === "new") return `Creates a new empty instance of the ${mod.split(".").pop()} collection.`;
  if (name === "clear") return `Removes all elements from the collection, resetting it to empty.`;
  if (name === "clone") return `Returns a deep copy of the collection, independent of the original.`;
  if (name === "len") return `Returns the number of elements in the collection.`;
  if (name === "is_empty") return `Returns true if the collection contains no elements.`;
  if (name === "free") return `Releases the underlying memory allocated by the collection.`;
  if (name === "capacity") return `Returns the current allocated capacity of the collection.`;
  if (name === "reserve") return `Ensures the collection has capacity for at least the specified number of elements.`;
  if (name === "to_list") return `Converts the collection into a plain list.`;
  if (name === "from_list") return `Creates a new collection initialized with the elements from the given list.`;
  if (name === "entries") return `Returns all key-value pairs (or index-value pairs) as a list of tuples.`;
  if (name === "from_entries") return `Creates a new collection from a list of key-value pairs.`;

  // ── List/Stack/Queue specifics ──
  if (name === "push") return `Adds an element to the collection.`;
  if (name === "pop") return `Removes and returns the last element from the collection.`;
  if (name === "get") return `Returns the element at the specified index without removing it.`;
  if (name === "try_get") return `Returns the element at the specified index, or an error if the index is out of bounds.`;
  if (name === "set") return `Replaces the element at the specified index with a new value.`;
  if (name === "insert") return `Inserts an element at the specified index, shifting subsequent elements.`;
  if (name === "remove") return `Removes and returns the element at the specified index.`;
  if (name === "try_remove") return `Removes the element at the specified index, or returns an error if out of bounds.`;
  if (name === "try_pop") return `Removes and returns the last element, or returns an error if empty.`;
  if (name === "index_of") return `Returns the index of the first occurrence of the given element, or -1 if not found.`;
  if (name === "contains") return `Returns true if the collection contains the specified element.`;
  if (name === "slice") return `Returns a new collection containing elements from the specified start to end index.`;
  if (name === "reverse") return `Returns a new collection with elements in reversed order.`;
  if (name === "sort") return `Returns a new collection with elements sorted in ascending order.`;
  if (name === "filter") return `Returns a new collection containing only elements that satisfy the given predicate.`;
  if (name === "map") return `Returns a new collection by applying a transformation function to each element.`;

  // ── Deque specifics ──
  if (name === "push_front") return `Adds an element to the front of the deque.`;
  if (name === "push_back") return `Adds an element to the back of the deque.`;
  if (name === "pop_front") return `Removes and returns the element at the front of the deque.`;
  if (name === "pop_back") return `Removes and returns the element at the back of the deque.`;
  if (name === "front") return `Returns the element at the front without removing it.`;
  if (name === "back") return `Returns the element at the back without removing it.`;

  // ── Linked list specifics ──
  if (name === "find") return `Searches for a node matching the predicate and returns its value.`;
  if (name === "value_at") return `Returns the value at the specified node index.`;
  if (name === "cursor_front") return `Creates a cursor positioned at the front of the list.`;
  if (name === "cursor_back") return `Creates a cursor positioned at the back of the list.`;
  if (name === "insert_after") return `Inserts a new element after the node at the given cursor position.`;
  if (name === "insert_before") return `Inserts a new element before the node at the given cursor position.`;
  if (name === "remove_at") return `Removes the element at the specified node index.`;

  // ── Map/HashTable specifics ──
  if (name === "try_remove") return `Removes the entry with the given key, or returns an error if the key is not found.`;
  if (name === "keys") return `Returns a list of all keys in the collection.`;
  if (name === "values") return `Returns a list of all values in the collection.`;

  // ── Set specifics ──
  if (name === "add") return `Adds an element to the set. Returns true if the element was newly inserted.`;
  if (name === "union") return `Returns a new set containing all elements from both sets.`;
  if (name === "intersection") return `Returns a new set containing only elements present in both sets.`;
  if (name === "difference") return `Returns a new set with elements in the first set but not in the second.`;

  // ── Graph specifics ──
  if (name === "add_node") return `Adds a new node to the graph.`;
  if (name === "add_edge") return `Adds a directed edge between two nodes.`;
  if (name === "add_weighted_edge") return `Adds a weighted directed edge between two nodes.`;
  if (name === "remove_node") return `Removes a node and all its connected edges from the graph.`;
  if (name === "remove_edge") return `Removes the edge between two nodes.`;
  if (name === "has_node") return `Returns true if the graph contains the specified node.`;
  if (name === "has_edge") return `Returns true if a direct edge exists between the two nodes.`;
  if (name === "neighbors") return `Returns the list of nodes directly reachable from the given node.`;
  if (name === "nodes") return `Returns all nodes in the graph.`;
  if (name === "edges") return `Returns all edges in the graph as source-target pairs.`;
  if (name === "edge_len") return `Returns the number of edges in the graph.`;
  if (name === "edge_weight") return `Returns the weight of the edge between two nodes.`;
  if (name === "is_directed") return `Returns true if the graph is directed.`;
  if (name === "has_cycle") return `Returns true if the graph contains at least one cycle.`;
  if (name === "bfs") return `Performs a breadth-first traversal starting from the given node.`;
  if (name === "dfs") return `Performs a depth-first traversal starting from the given node.`;
  if (name === "shortest_path") return `Computes the shortest unweighted path between two nodes.`;
  if (name === "shortest_weighted_path") return `Computes the shortest weighted path between two nodes using Dijkstra's algorithm.`;
  if (name === "topological_sort") return `Returns a topological ordering of the graph nodes.`;
  if (name === "try_topological_sort") return `Attempts a topological sort, returning an error if the graph has cycles.`;
  if (name === "transitive_closure") return `Computes the transitive closure — for each pair (A, B), stores whether B is reachable from A.`;
  if (name === "strongly_connected_components") return `Finds all strongly connected components in the graph.`;
  if (name === "components") return `Returns the connected components of the graph.`;

  // ── Tree specifics ──
  if (name === "add_child") return `Adds a child node to the specified parent node.`;
  if (name === "children") return `Returns the direct children of the specified node.`;
  if (name === "parent") return `Returns the parent node of the specified node.`;
  if (name === "root") return `Returns the root node of the tree.`;
  if (name === "value") return `Returns the value stored at the specified node.`;
  if (name === "try_value") return `Returns the value at the node, or an error if the node is not found.`;
  if (name === "set_value") return `Replaces the value stored at the specified node.`;
  if (name === "find") return `Searches for a node matching the predicate and returns it.`;
  if (name === "contains_node") return `Returns true if the tree contains the specified node.`;
  if (name === "depth") return `Returns the depth of the specified node from the root.`;
  if (name === "len") return `Returns the total number of nodes in the tree.`;
  if (name === "pre_order") return `Traverses the tree in pre-order (root, children) and returns node values.`;
  if (name === "post_order") return `Traverses the tree in post-order (children, root) and returns node values.`;
  if (name === "breadth_first") return `Traverses the tree level by level and returns node values.`;
  if (name === "clone_subtree") return `Creates a deep copy of the subtree rooted at the given node.`;
  if (name === "move_subtree") return `Moves a subtree to become a child of a new parent node.`;
  if (name === "remove_subtree") return `Removes the subtree rooted at the specified node.`;

  // ── Heap specifics ──
  if (name === "peek") return `Returns the highest-priority element without removing it.`;
  if (name === "push") return `Adds an element to the heap, maintaining the heap property.`;
  if (name === "pop") return `Removes and returns the highest-priority element from the heap.`;
  if (name === "merge") return `Merges another heap into this one, combining all elements.`;
  if (name === "into_sorted_list") return `Drains the heap and returns all elements as a sorted list.`;
  if (name === "remove") return `Removes a specific element from the heap.`;

  // ── Stack specifics ──
  if (name === "push") return `Pushes an element onto the top of the stack.`;
  if (name === "pop") return `Removes and returns the top element from the stack.`;
  if (name === "peek") return `Returns the top element without removing it.`;

  // ── Queue specifics ──
  if (name === "enqueue") return `Adds an element to the back of the queue.`;
  if (name === "dequeue") return `Removes and returns the front element from the queue.`;
  if (name === "peek") return `Returns the front element without removing it.`;

  // ── String operations ──
  if (name === "chars") return `Returns the individual characters of the string as a list.`;
  if (name === "concat") return `Concatenates two strings into one.`;
  if (name === "contains") return `Returns true if the string contains the given substring.`;
  if (name === "ends_with") return `Returns true if the string ends with the given suffix.`;
  if (name === "starts_with") return `Returns true if the string starts with the given prefix.`;
  if (name === "from_bytes") return `Converts a byte buffer to a string, interpreting bytes as UTF-8.`;
  if (name === "to_bytes") return `Converts the string to a UTF-8 encoded byte buffer.`;
  if (name === "index_of") return `Returns the index of the first occurrence of the substring, or -1 if not found.`;
  if (name === "join") return `Joins a list of strings with the given separator.`;
  if (name === "len") return `Returns the number of characters in the string.`;
  if (name === "pad_left") return `Pads the string on the left to the target length with the given character.`;
  if (name === "pad_right") return `Pads the string on the right to the target length with the given character.`;
  if (name === "parse_float") return `Parses the string as a floating-point number.`;
  if (name === "parse_int") return `Parses the string as an integer.`;
  if (name === "repeat") return `Returns a new string formed by repeating the string N times.`;
  if (name === "replace") return `Replaces the first occurrence of a substring with a new value.`;
  if (name === "slice") return `Returns a substring from the specified start index to end index.`;
  if (name === "to_lower") return `Returns a lowercase copy of the string.`;
  if (name === "to_upper") return `Returns an uppercase copy of the string.`;
  if (name === "trim") return `Removes leading and trailing whitespace from the string.`;
  if (name === "trim_end") return `Removes trailing whitespace from the string.`;
  if (name === "trim_start") return `Removes leading whitespace from the string.`;

  // ── Bytes operations ──
  if (name === "concat") return `Concatenates two byte buffers into one.`;
  if (name === "decode_utf8") return `Decodes the byte buffer as a UTF-8 string.`;
  if (name === "get") return `Returns the byte at the specified index.`;
  if (name === "slice") return `Returns a sub-buffer from the specified byte range.`;
  if (name === "to_list") return `Converts the byte buffer to a list of integers.`;

  // ── Math operations ──
  if (name === "abs") return `Returns the absolute value of the number.`;
  if (name === "ceil") return `Rounds the number up to the nearest integer.`;
  if (name === "floor") return `Rounds the number down to the nearest integer.`;
  if (name === "round") return `Rounds the number to the nearest integer.`;
  if (name === "trunc") return `Truncates the decimal part, returning the integer portion.`;
  if (name === "clamp") return `Restricts the value to the specified minimum and maximum range.`;
  if (name === "max") return `Returns the larger of the two values.`;
  if (name === "min") return `Returns the smaller of the two values.`;
  if (name === "pow") return `Returns the base raised to the given exponent.`;
  if (name === "sqrt") return `Returns the square root of the number.`;
  if (name === "exp") return `Returns e raised to the given power.`;
  if (name === "ln") return `Returns the natural logarithm of the number.`;
  if (name === "log") return `Returns the logarithm of the number with the given base.`;
  if (name === "log2") return `Returns the base-2 logarithm of the number.`;
  if (name === "log10") return `Returns the base-10 logarithm of the number.`;
  if (name === "sin") return `Returns the sine of the given angle in radians.`;
  if (name === "cos") return `Returns the cosine of the given angle in radians.`;
  if (name === "tan") return `Returns the tangent of the given angle in radians.`;
  if (name === "asin") return `Returns the arc sine (inverse sine) of the value.`;
  if (name === "acos") return `Returns the arc cosine (inverse cosine) of the value.`;
  if (name === "atan") return `Returns the arc tangent (inverse tangent) of the value.`;
  if (name === "atan2") return `Returns the arc tangent of y/x using the signs of both arguments.`;
  if (name === "is_nan") return `Returns true if the value is NaN (Not a Number).`;
  if (name === "is_infinite") return `Returns true if the value is positive or negative infinity.`;
  if (name === "is_finite") return `Returns true if the value is a finite number (not NaN or infinity).`;

  // ── IO operations ──
  if (name === "eprint") return `Writes a string to the standard error output without a newline.`;
  if (name === "eprintln") return `Writes a string to the standard error output, followed by a newline.`;
  if (name === "read_line") return `Reads a single line of input from standard input.`;

  // ── FS operations ──
  if (name === "exists") return `Returns true if the file or directory exists at the given path.`;
  if (name === "is_dir") return `Returns true if the path points to a directory.`;
  if (name === "is_file") return `Returns true if the path points to a regular file.`;
  if (name === "file_size") return `Returns the size of the file in bytes.`;
  if (name === "created_at") return `Returns the creation timestamp of the file.`;
  if (name === "modified_at") return `Returns the last modification timestamp of the file.`;
  if (name === "read") return `Reads the contents of a file into a bytes buffer.`;
  if (name === "read_all") return `Reads the entire contents of a file into a bytes buffer.`;
  if (name === "read_text") return `Reads the entire contents of a file as a string.`;
  if (name === "read_text_async") return `Reads the entire contents of a file as a string asynchronously.`;
  if (name === "read_bytes") return `Reads a specific number of bytes from the file.`;
  if (name === "write") return `Writes a bytes buffer to a file.`;
  if (name === "write_bytes") return `Writes raw bytes to a file at the current position.`;
  if (name === "write_text") return `Writes a string to a file, creating it if it doesn't exist.`;
  if (name === "write_text_async") return `Writes a string to a file asynchronously.`;
  if (name === "append_text") return `Appends a string to the end of a file.`;
  if (name === "open_read") return `Opens a file for reading and returns a file handle.`;
  if (name === "open_write") return `Opens a file for writing and returns a file handle.`;
  if (name === "close") return `Closes an open file handle, releasing the associated resources.`;
  if (name === "copy") return `Copies a file from source path to destination path.`;
  if (name === "rename") return `Renames or moves a file from one path to another.`;
  if (name === "delete") return `Deletes the file at the specified path.`;
  if (name === "create_dir") return `Creates a new directory at the specified path.`;
  if (name === "create_dir_all") return `Creates a directory and all necessary parent directories.`;
  if (name === "list_dir") return `Lists all entries in the specified directory.`;

  // ── OS operations ──
  if (name === "platform") return `Returns the current operating system platform name.`;
  if (name === "arch") return `Returns the CPU architecture (e.g., x86_64, aarch64).`;
  if (name === "pid") return `Returns the current process ID.`;
  if (name === "args") return `Returns the command-line arguments passed to the program.`;
  if (name === "env") return `Returns the value of an environment variable.`;
  if (name === "exit") return `Terminates the process with the specified exit code.`;
  if (name === "current_dir") return `Returns the current working directory path.`;
  if (name === "change_dir") return `Changes the current working directory to the specified path.`;

  // ── Path operations ──
  if (name === "absolute") return `Returns the absolute path, resolving relative segments.`;
  if (name === "relative") return `Returns the relative path from the current directory.`;
  if (name === "parent") return `Returns the parent directory of the path.`;
  if (name === "base_name") return `Returns the final component of the path (file or directory name).`;
  if (name === "extension") return `Returns the file extension (including the dot).`;
  if (name === "has_extension") return `Returns true if the path has the specified extension.`;
  if (name === "change_extension") return `Returns a new path with the extension replaced.`;
  if (name === "name_without_extension") return `Returns the file name without its extension.`;
  if (name === "normalize") return `Returns the path with normalized separators and resolved dot/dotdot segments.`;
  if (name === "is_absolute") return `Returns true if the path is absolute.`;
  if (name === "is_relative") return `Returns true if the path is relative.`;

  // ── Net operations ──
  if (name === "connect") return `Establishes a TCP connection to the specified host and port.`;
  if (name === "read_some") return `Reads some bytes from the network stream.`;
  if (name === "write_all") return `Writes all bytes to the network stream.`;
  if (name === "is_closed") return `Returns true if the network connection has been closed.`;

  // ── Process operations ──
  if (name === "run") return `Executes a system command and waits for it to complete.`;
  if (name === "run_capture") return `Executes a system command and captures its stdout and stderr output.`;

  // ── Channel operations ──
  if (name === "create") return `Creates a new channel for message passing between tasks.`;
  if (name === "send") return `Sends a value through the channel.`;
  if (name === "receive") return `Receives a value from the channel, blocking until one is available.`;

  // ── Task operations ──
  if (name === "spawn") return `Spawns a new async task that runs concurrently.`;
  if (name === "join") return `Waits for the task to complete and returns its result.`;
  if (name === "cancel") return `Cancels the running task.`;
  if (name === "detach") return `Detaches the task so it runs independently without a join handle.`;
  if (name === "sleep") return `Suspends the current task for the specified duration in milliseconds.`;
  if (name === "block_on") return `Blocks the current thread until the given async operation completes.`;
  if (name === "is_cancelled") return `Returns true if the task has been cancelled.`;
  if (name === "create_token") return `Creates a cancellation token that can be shared across tasks.`;
  if (name === "associate") return `Associates the task with a cancellation token for cooperative cancellation.`;

  // ── Atomic operations ──
  if (name === "new") return `Creates a new atomic value initialized with the given value.`;
  if (name === "load") return `Atomically reads the current value.`;
  if (name === "store") return `Atomically replaces the stored value.`;
  if (name === "add") return `Atomically adds to the current value and returns the previous value.`;

  // ── Lazy operations ──
  if (name === "once") return `Creates a lazy value that computes its result on first access and caches it.`;
  if (name === "force") return `Forces evaluation of the lazy value and returns the computed result.`;
  if (name === "is_consumed") return `Returns true if the lazy value has already been evaluated.`;

  // ── Convert operations ──
  if (name === "bool_to_string") return `Converts a boolean to its string representation ("true" or "false").`;
  if (name === "float_to_string") return `Converts a float to its string representation.`;
  if (name === "string_to_float") return `Parses a string as a floating-point number.`;
  if (name === "string_to_int") return `Parses a string as an integer.`;

  // ── JSON operations ──
  if (name === "stringify") return `Serializes a value to a compact JSON string.`;
  if (name === "stringify_pretty") return `Serializes a value to a pretty-printed JSON string with indentation.`;
  if (name === "parse") return `Parses a JSON string into an Ori value.`;

  // ── Format operations ──
  if (name === "binary") return `Formats a number as a binary (base-2) string.`;
  if (name === "hex") return `Formats a number as a hexadecimal string.`;
  if (name === "number") return `Formats a number with locale-aware separators.`;
  if (name === "percent") return `Formats a float as a percentage string.`;
  if (name === "date") return `Formats a timestamp as a date string.`;
  if (name === "datetime") return `Formats a timestamp as a date-time string.`;
  if (name === "bytes_size") return `Formats a byte count as a human-readable size string (e.g., "1.5 MB").`;

  // ── Time operations ──
  if (name === "duration_ms") return `Returns the elapsed time in milliseconds since a reference point.`;

  // ── Test operations ──
  if (name === "assert") return `Asserts that a condition is true. Fails the test if false.`;
  if (name === "assert_eq") return `Asserts that two values are equal. Fails the test if they differ.`;
  if (name === "assert_ne") return `Asserts that two values are not equal. Fails the test if they are equal.`;
  if (name === "assert_no_leaks") return `Asserts that no memory leaks occurred during the test.`;
  if (name === "collect_cycles") return `Triggers cycle collection and returns the number of cycles collected.`;
  if (name === "fail") return `Immediately fails the current test with a message.`;
  if (name === "live_allocations") return `Returns the number of currently live memory allocations.`;
  if (name === "skip") return `Skips the current test.`;

  // ── Validate operations ──
  if (name === "between") return `Returns true if the value is between the specified min and max (exclusive).`;
  if (name === "in_range") return `Returns true if the value is within the specified range (inclusive).`;
  if (name === "int_in_range") return `Returns true if the integer is within the specified range (inclusive).`;
  if (name === "positive") return `Returns true if the number is greater than zero.`;
  if (name === "negative") return `Returns true if the number is less than zero.`;
  if (name === "non_negative") return `Returns true if the number is greater than or equal to zero.`;
  if (name === "non_zero") return `Returns true if the number is not zero.`;
  if (name === "even") return `Returns true if the integer is even.`;
  if (name === "odd") return `Returns true if the integer is odd.`;
  if (name === "not_empty") return `Returns true if the collection is not empty.`;
  if (name === "not_empty_text") return `Returns true if the string is not empty.`;
  if (name === "blank") return `Returns true if the string is empty or contains only whitespace.`;
  if (name === "string_not_blank") return `Returns true if the string is not blank.`;
  if (name === "all_digits") return `Returns true if the string contains only digit characters.`;
  if (name === "length_between") return `Returns true if the string length is between the specified min and max.`;
  if (name === "length_equal") return `Returns true if the string length equals the specified value.`;
  if (name === "matches_length") return `Returns true if the string length matches the specified value.`;
  if (name === "min_len") return `Returns true if the string has at least the minimum length.`;
  if (name === "min_length") return `Returns true if the string has at least the minimum length.`;
  if (name === "max_len") return `Returns true if the string has at most the maximum length.`;
  if (name === "max_length") return `Returns true if the string has at most the maximum length.`;
  if (name === "one_of") return `Returns true if the value matches one of the allowed values.`;
  if (name === "one_of_string") return `Returns true if the string equals one of the allowed values.`;

  // ── Iterator operations ──
  if (name === "all") return `Returns true if all elements satisfy the given predicate.`;
  if (name === "any") return `Returns true if at least one element satisfies the predicate.`;
  if (name === "count_where") return `Returns the number of elements that satisfy the predicate.`;
  if (name === "find") return `Returns the first element that satisfies the predicate, or an error if none found.`;
  if (name === "flat_map") return `Applies a function that returns a list to each element, then flattens the results.`;
  if (name === "flatten") return `Flattens a list of lists into a single list.`;
  if (name === "group_by") return `Groups elements by a key function into a map of lists.`;
  if (name === "partition") return `Splits elements into two groups based on a predicate.`;
  if (name === "reduce") return `Reduces all elements to a single value using an accumulator function.`;
  if (name === "skip") return `Returns a new collection skipping the first N elements.`;
  if (name === "take") return `Returns a new collection with at most N elements from the start.`;
  if (name === "unique") return `Returns a new collection with duplicate elements removed.`;
  if (name === "zip") return `Combines two collections into a list of paired tuples.`;
  if (name === "sort") return `Returns a new collection with elements sorted by the given key function.`;
  if (name === "sort_by") return `Returns a new collection with elements sorted by the given key function.`;

  // ── Panic ──
  if (name === "panic") return `Terminates the program with a panic message.`;

  // ── Type conversions (built-in) ──
  if (mod === "float" && name === "float") return `Converts an integer to its floating-point representation.`;
  if (mod === "int" && name === "int") return `Identity function that returns the integer unchanged.`;
  if (mod === "len" && name === "len") return `Returns the number of elements in the given collection or characters in a string.`;
  if (mod === "string" && name === "string") return `Converts a value to its string representation.`;

  // ── Fallback ──
  const moduleName = mod.split(".").pop().replace(/_/g, " ");
  return `Performs the ${name.replace(/_/g, " ")} operation on ${moduleName}.`;
}

// ── Build enriched docs ────────────────────────────────────────
const enriched = { ...existing };

// Add module descriptions
for (const [mod, desc] of Object.entries(moduleDescriptions)) {
  if (!enriched[mod]) {
    enriched[mod] = { description: desc };
  }
}

// Add symbol descriptions
let added = 0;
for (const sym of symbols.symbols) {
  if (enriched[sym.id]) continue; // skip if already has docs

  enriched[sym.id] = {
    description: describeSymbol(sym),
  };
  added++;
}

// Write updated docs
fs.writeFileSync(
  path.join(root, "src", "data", "stdlib-docs.json"),
  JSON.stringify(enriched, null, 2) + "\n"
);

console.log(`Added ${added} symbol descriptions.`);
console.log(`Total entries in stdlib-docs.json: ${Object.keys(enriched).length}`);
