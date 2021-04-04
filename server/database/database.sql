CREATE DATABASE c_fitness;

/*Create tables and inset data for logon function*/

CREATE TABLE signin
(
  si_id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  date DATE NOT NULL
);

CREATE TABLE secrets
(
  se_id SERIAL PRIMARY KEY,
  password VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  date DATE NOT NULL
);

INSERT INTO signin
  (username, email, date)
VALUES
  ('bones', 'bones@bones.com', '2021-01-10');

INSERT INTO secrets
  (password, email, date)
VALUES
  ('myPassword', 'bones@bones.com', '2021-01-10');

/*Create tables and inset data for General Health Assessment Form*/

CREATE TABLE general_health_assessment_form
(
  haf_id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
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
  score SMALLINT,
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
  score,
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
    '20',
    '2021-01-10'
  );

/*Create tables and inset data for Goal Setting Form*/

CREATE TABLE goal_setting_form
(
  gsf_id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  lifstylechanges VARCHAR(3000),
  easiesttochange VARCHAR(3000),
  hardesttochange VARCHAR(3000),
  date DATE NOT NULL
);

INSERT INTO goal_setting_form
  (email, lifstylechanges, easiesttochange, hardesttochange, date)
VALUES
  ('bones@bones.com', 'Some long story 1', 'Some long story 2', 'Some long story 3', '2021-01-10');

/*Create tables and inset data for Life Style Assessment Form*/

CREATE TABLE lifestyle_ass_form
(
  laf_id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  fullname VARCHAR(255),
  lastname VARCHAR(255),
  dateofbirth VARCHAR(255),
  adress VARCHAR(255),
  cellno VARCHAR(255),
  econtact VARCHAR(255),
  ecellno VARCHAR(255),
  relationship VARCHAR(255),
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
  laf_id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
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
