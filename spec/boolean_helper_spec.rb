require "boolean_helper"

class BooleanHelperWrapper
  include BooleanHelper
end

describe BooleanHelper do

  subject(:boolean_helper) do
    BooleanHelperWrapper.new
  end

  let(:comparison) { { "benefit" => "Foo", "onsite" => true, "remote" => false } }

  it 'returns the true case if object is equal to true' do
    expect(subject.parse_boolean(comparison["onsite"], "True case", "False case")).to eq "True case"
  end

  it 'returns the false case if object is equal to false' do
    expect(subject.parse_boolean(comparison["remote"], "True case", "False case")).to eq "False case"
  end

  it 'returns the object if object is neither equal to true or to false' do
    expect(subject.parse_boolean(comparison["benefit"], "True case", "False case")).to eq comparison["benefit"]
  end
end
