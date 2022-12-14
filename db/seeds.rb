# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'Creating questions'

Question.create([
                  {
                    title: 'How to check if a key is present in a hash?',
                    tag: 'Ruby'
                  },
                  {
                    title: 'What is the difference between strings and symbol?',
                    tag: 'Ruby'
                  },
                  {
                    title: 'What happened if you add two same keys in hash?',
                    tag: 'Ruby'
                  },
                  {
                    title: 'How to delete a given key from hash?',
                    tag: 'Ruby'
                  },
                  {
                    title: 'How to check if two hashes are identical?',
                    tag: 'Ruby'
                  },
                  {
                    title: 'How to combine two hashes in Ruby?',
                    tag: 'Ruby'
                  },
                  {
                    title: 'How to get unique keys from two hashes in Ruby?',
                    tag: 'Ruby'
                  },
                  {
                    title: 'What does the has_key?, key?, member?, and include? methods in a hash?',
                    tag: 'Ruby'
                  },
                  {
                    title: 'What are blocks in Ruby?',
                    tag: 'Ruby'
                  },
                  {
                    title: 'Does the order of keys matters to compare two hashes in Ruby?',
                    tag: 'Ruby'
                  }
                ])

puts 'questions created'
