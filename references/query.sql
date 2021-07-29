Drop Table IF EXISTS speed_dating_cleaned;

Create Table speed_dating_cleaned as
	SELECT * from Speed_Dating_raw
	Where wave <= 5 or wave >= 10;
	
Select * From speed_dating_cleaned;

Drop Table speed_date_final CASCADE;
DROP TABLE speeddatefinal CASCADE;

Create Table speeddatefinal as
Select iid, gender, wave, round, partner, pid, match,
int_corr, samerace, age_o, race_o, dec_o, attr_o, sinc_o, intel_o,
fun_o, amb_o, shar_o, like_o, prob_o, met_o, age, field, race, imprace,
imprelig, originally_from, zipcode, income, goal, date, career, sports,
tvsports, exercise, dining, museums, art, hiking, gaming, clubbing, reading, tv,
theater, movies, concerts, music, shopping, yoga, exphappy, expnum, attr1_1,
sinc1_1, intel1_1, fun1_1, amb1_1, shar1_1
FROM speed_dating_cleaned;

ALTER TABLE speeddatefinal
ADD COLUMN id serial primary key;

Select * FROM speeddatefinal;

DROP TABLE dategrid CASCADE;

Create Table dategrid as
Select wave, iid as "Participant_Number", originally_from, field, race, exphappy, partner, pid, match, int_corr
FROM speeddatefinal;

Select wave, iid as "Participant_Number", originally_from, field, race, exphappy, partner, pid, match, int_corr
FROM speeddatefinal
GROUP BY "Participant_Number", wave, originally_from, field, race, exphappy, partner, pid, match, int_corr
ORDER BY "Participant_Number";

SELECT * FROM dategrid;

SELECT * FROM dategrid
WHERE "Participant_Number" <= 5;

DROP TABLE plotly CASCADE;
DROP TABLE IF EXISTS plotly;

CREATE TABLE plotly as
SELECT "Participant_Number", originally_from, field, race, exphappy, 
COUNT("Participant_Number") as "Number_of_Dates"
FROM dategrid
GROUP BY "Participant_Number", originally_from, field, race, exphappy
ORDER BY "Participant_Number";

ALTER TABLE plotly
ADD CONSTRAINT plotly_pk PRIMARY KEY ("Participant_Number");

ALTER Table plotly
RENAME exphappy TO Expectations_of_Happiness;

-- ALTER Table plotly
-- RENAME int_corr TO correlation_of_interests;

Select * FROM plotly;

