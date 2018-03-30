module.exports = {
    getInventory: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory()
        .then((inventory) => res.status(200).send( inventory ))
        .catch(() => res.status(500).send());
    },
}