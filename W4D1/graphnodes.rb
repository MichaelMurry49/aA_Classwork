class GraphNode
    attr_reader :value, :neighbors

    def self.bfs(start_node, target_value)
        queue = []
        queue << start_node
        until queue.empty?
            cur_node = queue.shift
            return cur_node if cur_node.value == target_value
            queue += cur_node.neighbors
        end
    end

    def self.bfs_visit_limit(start_node, target_value)
        queue = []
        visited = []
        queue << start_node
        until queue.empty?
            cur_node = queue.shift
            visited.each do |node|
                cur_node.neighbors.delete(node)
            end
            visited << cur_node
            return cur_node if cur_node.value == target_value
            queue += cur_node.neighbors
        end
    end

    def initialize(value)
        @value = value
        @neighbors = []
    end

    def add_neighbor(node)
        @neighbors << node if node.is_a?(GraphNode)
    end

    def add_neighbors(nodes)
        @neighbors += nodes
    end

end

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.add_neighbors([b, c, e])
c.add_neighbors([b, d])
e.add_neighbors([a])
f.add_neighbors([e])
p GraphNode.bfs(a, "b")
#p GraphNode.bfs(a, "f")
p GraphNode.bfs_visit_limit(a, "b")
p GraphNode.bfs_visit_limit(a, "f")
