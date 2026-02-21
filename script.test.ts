import { describe, it, expect, vi } from 'vitest'
import { Hotel } from './script'
import { skiLesson, cookingClass, massage, printAttendies } from './activities'

describe('Hotel', () => {
  it('should create a hotel with correct properties', () => {
    const hotel = new Hotel('01', 'Test Hotel', 100, 'silver')

    expect(hotel.id).toBe('01')
    expect(hotel.name).toBe('Test Hotel')
    expect(hotel.cost).toBe(100)
    expect(hotel.category).toBe('silver')
    expect(hotel.amenities).toEqual([])
  })

  it('should add amenities correctly', () => {
    const hotel = new Hotel('02', 'Amenity Hotel', 150, 'gold')

    hotel.addAmenity('wifi')
    hotel.addAmenity('pool')

    expect(hotel.amenities).toEqual(['wifi', 'pool'])
  })

  it('should describe hotel correctly', () => {
    const hotel = new Hotel('03', 'Description Hotel', 200, 'bronze')
    hotel.addAmenity('breakfast')
    hotel.addAmenity('spa')

    const description = hotel.describeHotel()

    expect(description).toBe('The Description Hotel costs $200  for category bronze and includes the following amenities: breakfast, spa.')
  })

  it('should handle hotel with no amenities', () => {
    const hotel = new Hotel('04', 'Basic Hotel', 50, 'bronze')

    const description = hotel.describeHotel()

    expect(description).toBe('The Basic Hotel costs $50  for category bronze and includes the following amenities: .')
  })
})

describe('Activities', () => {
  it('should have correct ski lesson activity', () => {
    expect(skiLesson.name).toBe('Steeps Clinic')
    expect(skiLesson.location).toBe('Matterhorn Gondola')
    expect(skiLesson.attendees).toHaveLength(2)
    expect(skiLesson.attendees[0].name).toBe('Jessica Sweet')
    expect(skiLesson.attendees[0].interest).toBe('skiing')
    expect(skiLesson.attendees[1].name).toBe('Jason Williams')
    expect(skiLesson.attendees[1].interest).toBe('adrenaline sports')
  })

  it('should have correct cooking class activity', () => {
    expect(cookingClass.name).toBe('Thai Cooking Class')
    expect(cookingClass.location).toBe('West Kitchen')
    expect(cookingClass.attendees).toHaveLength(1)
    expect(cookingClass.attendees[0].name).toBe('Leon Vida')
    expect(cookingClass.attendees[0].interest).toBe('restaurants')
  })

  it('should have correct massage activity', () => {
    expect(massage.name).toBe('Hot Stone Massage')
    expect(massage.location).toBe('Lotus Spa Lounge')
    expect(massage.attendees).toHaveLength(1)
    expect(massage.attendees[0].name).toBe('Jordan James')
    expect(massage.attendees[0].interest).toBe('spas')
  })
})