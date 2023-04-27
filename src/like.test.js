const allLikes = require('./module/apite');

// Mock fetch
global.fetch = jest.fn(() => Promise.resolve());

describe('allLikes', () => {
  it('should call the API with the correct item ID', async () => {
    await allLikes(42);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/32UoQxjPo3aTpkPwZxqF/likes/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item_id: 'item42' }),
      },
    );
  });

  it('total no of likes in the api is equal to total no of like displayed on the page', async () => {
    // Mock a rejected promise from fetch
    global.fetch = jest.fn(() => Promise.reject('some error'));

    // Mock the console.log method
    console.log = jest.fn();

    await allLikes(42);

    expect(console.log).toHaveBeenCalledWith('Error creating likes:', 'some error');
  });
});
