const express = require('express');
const auth = require('../middleware/auth');
const Event = require('../model/Event');
const User = require('../model/User');

const router = express.Router();

router.post('/events', auth, async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).send(event)
    } catch (error) {
        res.status(400).send({error: error})
        console.log(error)
    }
});

router.patch('/events/:id', auth, async (req, res) => {
    try {
        await Event.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedEvent) => {
            if (error) throw new Error(error);
            res.status(200).send(updatedEvent);
        });
    } catch (error) {
        res.status(400).send({error: error})
    }
});

router.get('/events/all', auth, async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).send(events);
    } catch (error) {
        res.status(400).send({error: 'No events available at the moment!'})
    }
});

router.get('/events/:id', auth, async (req, res) => {
    try {
        const events = await Event.findOne({_id: req.params.id});
        if(!events) throw new Error();
        res.status(200).json(events);
    } catch (error) {
        res.status(400).send({error: 'No events available at the moment!'})
    }
});

router.delete('/events/:id', auth, async (req, res) => {
    try {
        await Event.findByIdAndRemove(req.params.id, req.body);
        res.status(200).send({message: "Deleted!"});
    } catch (error) {
        res.status(400).send({error: error})
    }
});

/**
 * Filter events routes section --
 * **/
router.post('/events/filter', auth, async (req, res) => {
    try {
        const events = await Event.find(req.body);
        res.status(200).json(events);
    } catch (error) {
        res.status(400).send({error: 'No events available at the moment!'})
    }
});

module.exports = router;
