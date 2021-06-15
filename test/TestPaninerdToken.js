const PaninerdToken = artifacts.require('PaninerdToken')

contract('PaninerdToken', async (accounts) => {
  const owner = accounts[0]
  it('should create contract with zero initial supply', async () => {
    const token = await PaninerdToken.deployed()
    const totalSupply = await token.totalSupply.call()
    assert.equal(totalSupply, 0, 'Invalid initial supply')
  })
  it('should check that messagesReward follows logistic curve', async () => {
    const token = await PaninerdToken.deployed()

    const account1 = accounts[1]
    await token.messagesReward.call(account1, 10, { from: owner })
    const balanceOfAccount1 = await token.balanceOf.call(account1)
    assert.equal(balanceOfAccount1, 10, 'Invalid balance')
  })
  
})
