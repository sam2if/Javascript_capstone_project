const allLikes = async (id) => {
  try {
    const items = `item${id}`;
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/32UoQxjPo3aTpkPwZxqF/likes/', {
      method: 'POST',
      body: JSON.stringify({
        item_id: items,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log('Error creating likes:', error);
  }
};

module.exports = allLikes;
