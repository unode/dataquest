
module.exports = Npc = QEntity.extend({
    init: function(id, kind, x, y) {
        this._super(id, "npc", kind, x, y);
    }
});
