import DistributionClass from "../../controller/distribution";

const express = require('express');

const router = express.Router();

const distribution = new DistributionClass();

router.get('/', distribution.getAllDistribution);
router.post('/', distribution.saveDistribution);
router.put('/:id', distribution.updateDistribution);
router.delete('/:id', distribution.deleteDistribution);

export = router;