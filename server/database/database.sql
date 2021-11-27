CREATE DATABASE c_fitness;

/*Create tables and inset data for logon function*/
/*si_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL*/

CREATE TABLE signin
(
  si_id INTEGER PRIMARY KEY NOT NULL,
  lastname VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  date DATE NOT NULL
);

CREATE TABLE secrets
(
  se_id INTEGER PRIMARY KEY NOT NULL,
  password VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  date DATE NOT NULL
);

INSERT INTO signin
  (lastname, email, date)
VALUES
  ('test', 'test@test.com', '2021-10-27');

INSERT INTO secrets
  (password, email, date)
VALUES
  ('test', 'test@test.com', '2021-10-27');

/*Create tables and inset data for Score*/
  CREATE TABLE score
(
  score_id INTEGER PRIMARY KEY NOT NULL,
  score_description VARCHAR(1000) NOT NULL,
  date DATE NOT NULL
);

INSERT INTO score
  (score_description, date)
VALUES
  ('test', '2021-10-31');

/*Create tables and inset data for General Health Assessment Form*/

CREATE TABLE general_health_assessment_form
(
  haf_id INTEGER PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL ,
  ihavesomeonetotalkto SMALLINT,
  giveandreceiveaffection SMALLINT,
  iAmphysicallyactive SMALLINT,
  iexercise SMALLINT,
  useseatbelts SMALLINT,
  isleepwell SMALLINT,
  ofteneatexcess SMALLINT,
  overweight SMALLINT,
  underweight SMALLINT,
  myidealweight SMALLINT,
  smokedtabacco SMALLINT,
  cigarettesperday SMALLINT,
  illegaldrugs SMALLINT,
  overusemedication SMALLINT,
  caffeinecontainingdrinks SMALLINT,
  averagealcoholintake SMALLINT,
  morethanfourdrinks SMALLINT,
  driveafterdrinking SMALLINT,
  copewithstress SMALLINT,
  leisuretime SMALLINT,
  inahurry SMALLINT,
  angryhostile SMALLINT,
  positiveoptimistic SMALLINT,
  tenseuptight SMALLINT,
  saddepressed SMALLINT,
  satisfiedjobrole SMALLINT,
  date DATE NOT NULL
);

INSERT INTO general_health_assessment_form
  (
  email,
  ihavesomeonetotalkto,
  giveandreceiveaffection,
  iAmphysicallyactive,
  iexercise,
  useseatbelts,
  isleepwell,
  ofteneatexcess,
  overweight,
  underweight,
  myidealweight,
  smokedtabacco,
  cigarettesperday,
  illegaldrugs,
  overusemedication,
  caffeinecontainingdrinks,
  averagealcoholintake,
  morethanfourdrinks,
  driveafterdrinking,
  copewithstress,
  leisuretime,
  inahurry,
  angryhostile,
  positiveoptimistic,
  tenseuptight,
  saddepressed,
  satisfiedjobrole,
  date
  )
VALUES
  (
    'bones@bones.com',
    '4',
    '4',
    '4',
    '2',
    '2',
    '2',
    '0',
    '0',
    '0',
    '4',
    '4',
    '4',
    '2',
    '2',
    '2',
    '0',
    '0',
    '0',
    '4',
    '4',
    '4',
    '2',
    '2',
    '2',
    '0',
    '0',
    Date()
  );

/*Create tables and inset data for Goal Setting Form*/

CREATE TABLE goal_setting_form
(
  gsf_id INTEGER PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  lifstylechanges VARCHAR(3000),
  easiesttochange VARCHAR(3000),
  hardesttochange VARCHAR(3000),
  date DATE NOT NULL
);

INSERT INTO goal_setting_form
  (email, lifstylechanges, easiesttochange, hardesttochange, date)
VALUES
  ('bones@bones.com', 'Some long story 1', 'Some long story 2', 'Some long story 3', '2021-10-23');

/*Create tables and inset data for Life Style Assessment Form*/

CREATE TABLE lifestyle_ass_form
(
  laf_id INTEGER PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  curhealtproblems VARCHAR(3000),
  medicalhistory VARCHAR(3000),
  medsandsuppliments VARCHAR(3000),
  heartdiseaserelation VARCHAR(255),
  diabetestype1relation VARCHAR(255),
  diabetestype2relation VARCHAR(255),
  highbloodpressurerelation VARCHAR(255),
  highcholesterolrelation VARCHAR(255),
  thyroiddiseaserelation VARCHAR(255),
  metabolicsyndromerelation VARCHAR(255),
  renaldiseaserelation VARCHAR(255),
  liverdiseaserelation VARCHAR(255),
  cancerinrelation VARCHAR(255),
  typeofcancerrelation VARCHAR(255),
  pastinjuriesall VARCHAR(3000),
  lifetressors VARCHAR(3000),
  copewithstress VARCHAR(3000),
  managingcurrentstress VARCHAR(3000),
  relaxorunwind VARCHAR(255),
  sleeppernight VARCHAR(255),
  date DATE NOT NULL
);

INSERT INTO lifestyle_ass_form
  (
  email,
  curhealtproblems,
  medicalhistory,
  medsandsuppliments,
  heartdiseaserelation,
  diabetestype1relation,
  diabetestype2relation,
  highbloodpressurerelation,
  highcholesterolrelation,
  thyroiddiseaserelation,
  metabolicsyndromerelation,
  renaldiseaserelation,
  liverdiseaserelation,
  cancerinrelation,
  typeofcancerrelation,
  pastinjuriesall,
  lifetressors,
  copewithstress,
  managingcurrentstress,
  relaxorunwind,
  sleeppernight,
  date
  )
VALUES
  (
    'bones@bones.com',
    'curhealtproblems',
    'medicalhistory',
    'medsandsuppliments',
    'heartDiseaseRelation',
    'diabetesType1Relation',
    'diabetesType2Relation',
    'highBloodPressureRelation',
    'highCholesterolRelation',
    'thyroidDiseaseRelation',
    'metabolicSyndromeRelation',
    'renalDiseaseRelation',
    'liverDiseaseRelation',
    'cancerinrelation',
    'typeOfCancerRelation',
    'pastInjuriesAll',
    'lifetressors',
    'copeWithStress',
    'managingCurrentStress',
    'relaxOrUnwind',
    'sleepPerNight',
    '2021-01-10'
  );

/*Create tables and inset data for Patient details*/

CREATE TABLE patient_details
(
  p_id INTEGER PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  fullname VARCHAR(255),
  lastname VARCHAR(255),
  dateofbirth VARCHAR(255),
  adress VARCHAR(255),
  cellno VARCHAR(255),
  econtact VARCHAR(255),
  ecellno VARCHAR(255),
  relationship VARCHAR(255),
  date DATE NOT NULL
);

INSERT INTO patient_details
  (
  email,
  fullname,
  lastname,
  dateofbirth,
  adress,
  cellno,
  econtact,
  ecellno,
  relationship,
  date
  )
VALUES
  (
    'bones@bone.com',
    'fullname',
    'lastname',
    'dateofbirth',
    'adress',
    'cellno',
    'econtact',
    'ecellno',
    'relationship',
    '2021-01-10'
  );

CREATE TABLE practisioner_comments
(
  pc_id INTEGER PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  suggestions VARCHAR(5000),
  date DATE NOT NULL
);

INSERT INTO practisioner_comments
  (email, suggestions, date)
VALUES
  ('test@test.com', 'some veru good suggestions the patient is not going to do', '2021-10-27');

CREATE TABLE practisioner_input_assessment
(
  pa_id INTEGER PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  age SMALLINT,
  malefemale VARCHAR(255),
  height SMALLINT,
  weight SMALLINT,
  waist SMALLINT,
  hip SMALLINT,
  thighleft SMALLINT,
  thighright SMALLINT,
  calfleft SMALLINT,
  calfright SMALLINT,
  bicepleft SMALLINT,
  bicepright SMALLINT,
  date DATE NOT NULL
);

INSERT INTO practisioner_input_assessment
  (
  email,
  age,
  malefemale,
  height,
  weight,
  waist,
  hip,
  thighleft,
  thighright,
  calfleft,
  calfright,
  bicepleft,
  bicepright,
  date
  )
VALUES 
(
  'email@email.com',  
  52,  
  'Male',  
  1.84,  
  96.8,  
  102,  
  95,  
  203,  
  202,  
  102,  
  101,  
  956,  
  159, 
  '2021-10-27'
);

CREATE TABLE practisioner_excersize_program
(
  pe_id INTEGER PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  warm_up_exercises VARCHAR(255),
  warm_up_reps SMALLINT,
  warm_up_wts SMALLINT,
  warm_up_weeks SMALLINT,
  warm_up_frequency SMALLINT,
  warm_up_start DATE,
  strength_exercises VARCHAR(255),
  strength_reps SMALLINT,
  strength_wts SMALLINT,
  strength_weeks SMALLINT,
  strength_frequency SMALLINT,
  strength_start DATE,
  cardio_exercises VARCHAR(255),
  cardio_reps SMALLINT,
  cardio_wts SMALLINT,
  cardio_weeks SMALLINT,
  cardio_frequency SMALLINT,
  cardio_start DATE,
  date DATE NOT NULL
);

INSERT INTO practisioner_excersize_program
  (
    email,
    warm_up_exercises,
    warm_up_reps,
    warm_up_wts,
    warm_up_weeks,
    warm_up_frequency,
    warm_up_start,
    strength_exercises,
    strength_reps,
    strength_wts,
    strength_weeks,
    strength_frequency,
    strength_start,
    cardio_exercises,
    cardio_reps,
    cardio_wts,
    cardio_weeks,
    cardio_frequency,
    cardio_start,
    date
  )
VALUES
  (
    'test@test.com',
  'warm_up_exercises',
  2,
  2,
  2,
  2,
  '2021-10-27',
  'strength_exercises',
  3,
  3,
  3,
  3,
  '2021-10-27',
  'cardio_exercises',
  4,
  4,
  4,
  4,
  '2021-10-27',
  '2021-10-27'
);