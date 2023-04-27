const createLikes = async () => {
  try {
    for (let i = 1; i <= 17; i++) {
      const items = `item${i}`;
      const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/32UoQxjPo3aTpkPwZxqF/likes/', {
        method: 'POST',
        body: JSON.stringify({
          item_id: items,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (error) {
    console.log('Error creating likes:', error);
  }
};

export { createLikes };