import Card from "../../ui/Card";
import Box from "../../ui/Box";
import Header from "../../ui/Header";
import Text from "../../ui/Text";
import Line from "../../ui/Line";
import TenantFinishExperience from "../../data/TenantFinishExperience";
import GroundUpExperience from "../../data/GroundUpExperience";
import AdditionsRenovationsExperience from "../../data/AdditionsRenovationsExperience";
import Job from "./Job";

function JobsStatement() {
  return (
    <Card bgcolor="var(--color-tan-100)">
      <Box>
        <Header color="var(--color-blue-400)" as="h2" align="center">
          Craig Ritchie Experience
        </Header>
        <Box gap="0px">
          <Text color="var(--color-red-500)" textcase="upper" as="h3">
            Tenant Finish
          </Text>
          <Line />
        </Box>
        <Box gap="7px">
          {TenantFinishExperience.map((job) => (
            <Job
              jobTitle={job.jobTitle}
              jobLocation={job.jobLocation}
              jobDescription={job.jobDescription}
              key={job.jobTitle}
            />
          ))}
        </Box>
        <Box gap="0px">
          <Text color="var(--color-red-500)" textcase="upper" as="h3">
            Ground Up Construction
          </Text>
          <Line />
        </Box>
        <Box gap="7px">
          {GroundUpExperience.map((job) => (
            <Job
              jobTitle={job.jobTitle}
              jobLocation={job.jobLocation}
              jobDescription={job.jobDescription}
              key={job.jobTitle}
            />
          ))}
        </Box>
        <Box gap="0px">
          <Text color="var(--color-red-500)" textcase="upper" as="h3">
            Additions & Renovations
          </Text>
          <Line />
        </Box>
        <Box gap="7px">
          {AdditionsRenovationsExperience.map((job) => (
            <Job
              jobTitle={job.jobTitle}
              jobLocation={job.jobLocation}
              jobDescription={job.jobDescription}
              key={job.jobTitle}
            />
          ))}
        </Box>
      </Box>
    </Card>
  );
}

export default JobsStatement;
