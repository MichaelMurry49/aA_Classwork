require "./spec/spec_helper.rb"
require "./lib/remove_dups.rb"
require "./lib/towers_of_hanoi.rb"

  describe "#remove_dups" do 
    reference_array = [1, 2, 1, 3, 3, 8, 4]
    changed_array = remove_dups(reference_array)

    it "should return unique elements in the order that they appear." do 
      expect(changed_array).to eq([1, 2, 3, 8, 4])
    end
  end

  describe "#two_sum" do
    reference_array = [-1,0,2,-2,1]
    changed_array = two_sum(reference_array)
    it "should return indexes that sum to 0" do
      expect(changed_array).to eq([[0, 4], [2, 3]])
    end
  end

  describe "#my_transpose" do
    reference_array = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]
    changed_array = my_transpose(reference_array)
    it "should flip every row and column" do
      expect(changed_array).to eq([[0, 3, 6], [1, 4, 7], [2, 5, 8]])
    end
  end

describe "#stock_picker" do 
  reference_array = [40, 100, 25, 80, 123, 32, 15]
  changed_array = stock_picker(reference_array)

  it "should find the most profitable days to buy and sell stock.  Buy before you sell!" do
    expect(changed_array).to eq([2, 4])
  end

end

describe TowersOfHanoi do
  tower = TowersOfHanoi.new(3) 

  describe "#initialize" do 
    it "initializes tower_one to an array with required number of arguments" do
      expect(tower.tower_one).to eq([3,2,1])
    end
    
    it "initializes tower_two to an empty array" do
      expect(tower.tower_two).to eq([])
    end

     it "initializes tower_three to an empty array" do
      expect(tower.tower_three).to eq([])
    end
  end

  describe "#take_and_place_disc" do 
    it "should take disc and place disc at new tower" do
      tower.take_and_place_disc(1, 2)
      expect(tower.tower_one).to eq([3, 2])
      expect(tower.tower_two).to eq([1])
    end
  end

  describe "#select_tower" do 
    it "should access the correct tower" do 
      expect(tower.select_tower(1)).to be(tower.tower_one)
      expect(tower.select_tower(2)).to be(tower.tower_two)
      expect(tower.select_tower(3)).to be(tower.tower_three)
    end
  end

  describe "#move" do 
    it "Should place a disc in a stack" do 
      expect(tower.move).to eq(true)
    end     
  end

  describe "#won?" do 
  end
end