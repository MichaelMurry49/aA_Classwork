class MaxIntSet

  attr_reader :store

  def initialize(max)
    @store = Array.new(max, false)
    @max = max
  end

  def insert(num)
    raise "Out of bounds" if !is_valid?(num)
    @store[num] = true
    
  end

  def remove(num)
    @store[num] = false
  end

  def include?(num)
    @store[num] == true
  end

  private

  def is_valid?(num)
    return true if num >= 0 && num < @max
    raise 'Out of bounds'
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num] << num 
  end

  def remove(num)
    self[num].delete(num) 
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    mod = num % num_buckets
    @store[mod]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

   def insert(num)
    resize! if count == num_buckets
    if !include?(num)
      self[num] << num
      @count += 1
    end
  end

  def remove(num)
    if include?(num)
      self[num].delete(num)
      @count -= 1 
    end
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    mod = num % num_buckets
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
