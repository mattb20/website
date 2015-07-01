require 'yaml'
require 'date'

class Intake

  FILE_NAME = File.join("data", "intakes.yml")
  DAYS_IN_WEEK = 7
  PRECOURSE_LENGTH = 4 * DAYS_IN_WEEK

  attr_reader :dates

  def initialize(dates)
    @dates = dates
  end

  def start_date
    Date.parse(dates["start_date"])
  end

  def end_date
    Date.parse(dates["end_date"])
  end

  def precourse_start_date
    start_date - PRECOURSE_LENGTH
  end

  def in_future?
    start_date >= (Date.today + PRECOURSE_LENGTH + 2)
  end

  def ==(intake)
    intake.dates == dates
  end

  def self.future_dates
    all.select(&:in_future?)
  end

  private

  def self.all
    YAML.load_file(FILE_NAME).map do |dates|
      new(dates)
    end
  end
end
