function generateMarkdown(data) {
  return `# ${data.project}
Name: ${data.name}
Github: ${data.github}
`;
}

module.exports = generateMarkdown;
