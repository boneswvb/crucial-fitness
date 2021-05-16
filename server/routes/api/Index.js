const express = require('express');
const router = express.Router();

const SignInPageRoute = require('./SignIn');
const RegisterPageRoute = require('./Register');
const GeneralHealthAssessmentPageRoute = require('./GeneralHealthAssessmentForm');
const GoalSettingFormRoute = require('./GoalSettingForm');
const LifeStyleAssFormRoute = require('./LifeStyleAssForm');
const PatientDetailsPageRoute = require('./PatientDetails');

router.use('/SignIn', SignInPageRoute);
router.use('/Register', RegisterPageRoute);
router.use('/GeneralHealthAssessmentForm', GeneralHealthAssessmentPageRoute);
router.use('/GoalSettingForm', GoalSettingFormRoute);
router.use('/LifeStyleAssForm', LifeStyleAssFormRoute);
router.use('/PatientDetails', PatientDetailsPageRoute);

module.exports = router;
