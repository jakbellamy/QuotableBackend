import {WinCard} from '../models/winCardModel'
import { winCardValidation } from '../validators/winCardValidation'
const _ = require('lodash')

export const postWinCard = async (req, res) => {
    const {error} = winCardValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    let winCard = await WinCard.findOne({
        imgUrl: req.body.imgUrl, quote: req.body.quote, user: req.body.user
    })
    if(winCard) return res.status(400).send('Win has already been logged')

    winCard = new WinCard(_.pick(req.body, ['imgUrl', 'quote', 'user']))
    await winCard.save()

    res.status(200).send('good win!')
}

export const getWinCards = (req, res) => {
    WinCard.find({}, (err, winCard) => {
        if (err) {
            res.send(err)
        }
        res.json(winCard)
    })
}