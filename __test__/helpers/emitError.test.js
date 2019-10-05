import emitError from '../../src/helpers/emitError'

describe('error helpers', () => {
  it('should emit an error', () => {
    expect(emitError.bind(null, 'some erros')).toThrow()
  })

  it('should be a function type', () => {
    expect(typeof emitError).toBe('function')
  })
})