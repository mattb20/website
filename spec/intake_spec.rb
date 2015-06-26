require 'intake'

describe Intake do

  subject(:intake) do
    described_class.new(relevant_intake)
  end

  let(:intake_offset) { 30 }

  let(:relevant_intake) do
    {
      "start_date" => date(intake_offset),
      "end_date" => date(120)
    }
  end

  let(:precourse_start) do
    Date.today + intake_offset - described_class::PRECOURSE_LENGTH
  end

  it "has a start date" do
    expect(intake.start_date).to eq(Date.parse(relevant_intake["start_date"]))
  end

  it "has a end date" do
    expect(intake.end_date).to eq(Date.parse(relevant_intake["end_date"]))
  end

  it "calculates the pre course start date" do
    expect(intake.precourse_start).to eq(precourse_start)
  end

  describe "Finding intakes" do

    before do
      allow(YAML).to receive(:load_file).and_return(intakes)
    end

    let(:past_intake) do
      {
        "start_date" => date(29),
        "end_date" => date(90)
      }
    end

    let(:future_intake) do
      {
        "start_date" => date(1),
        "end_date" => date(30)
      }
    end

    let(:intakes) do
      [past_intake, relevant_intake, future_intake]
    end

    it "finds all future intakes where the precourse has not started yet" do
      intake = Intake.new(relevant_intake)
      expect(described_class.future_dates).to eq([intake])
    end
  end

  def date(days_offset)
    (Date.today + days_offset).strftime("%d %B %Y")
  end
end
