import Text from "../../ui/Text";

function Job({ jobTitle, jobLocation, jobDescription }) {
  return (
    <>
      <Text fontWeight="700" color="var(--color-grey-500)">
        {jobTitle}
      </Text>
      <Text color="var(--color-grey-500)">{jobLocation}</Text>
      <Text color="var(--color-grey-500)">{jobDescription}</Text>
    </>
  );
}

export default Job;
