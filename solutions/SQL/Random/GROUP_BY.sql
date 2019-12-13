--Query 1: Output the number of eID’s per affiliation. Group by affiliation.
SELECT COUNT(eid), AFFILIATION
FROM editor
GROUP BY AFFILIATION;