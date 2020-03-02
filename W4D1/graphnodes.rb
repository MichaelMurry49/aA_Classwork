class GraphNode
    attr_reader :value, :neighbors
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