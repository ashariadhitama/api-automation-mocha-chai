const addPet = (petName, petCategory, petTags) =>  ({
    "id": 0,
    "category": {
        "id": 0,
        "name": petCategory
    },
    "name": petName,
    "photoUrls": [
        "string"
    ],
    "tags": [
        {
        "id": 0,
        "name": petTags
        }
    ],
    "status": "available"
});

module.exports = {
    addPet
}