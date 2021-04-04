const express = require('express');
const router = express.Router();

const SigninRoute = require('./SignIn');
const RegisterRoute = require('./Register');
const GeneralHealthAssessmentPageRoute = require('./GeneralHealthAssessmentForm');
const GoalSettingFormRoute = require('./GoalSettingForm');
const LifeStyleAssFormRoute = require('./LifeStyleAssForm');

router.use('/SignIn', SigninRoute);
router.use('/Register', RegisterRoute);
router.use('/GeneralHealthAssessmentForm', GeneralHealthAssessmentPageRoute);
router.use('/GoalSettingForm', GoalSettingFormRoute);
router.use('/LifeStyleAssForm', LifeStyleAssFormRoute);

module.exports = router;
