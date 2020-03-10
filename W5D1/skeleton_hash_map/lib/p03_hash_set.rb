require_relative "p02_hashing.rb"
class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    resize! if count == num_buckets
    if !include?(key)
      self[key] << key
      @count += 1
    end
    @store
  end

  def remove(key)
    if include?(key)
      self[key].delete(key)
      @count -= 1 
    end
  end

  def include?(key)
    self[key].include?(key)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    mod = (num.to_i.hash + num).hash % num_buckets
    @store[mod]
  end

  def num_buckets
    @store.length
  end

 def resize!
    new_store = Array.new(num_buckets * 2) {Array.new}
    @store.each do |sub_arr|
      sub_arr.each do |el|
        new_store[el % (num_buckets * 2)] << el
      end
    end
    @store = new_store
  end
end
