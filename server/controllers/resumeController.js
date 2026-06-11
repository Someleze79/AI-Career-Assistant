exports.analyzeResume = async (
  req,
  res
) => {

  try {

    res.status(200).json({
      score: 82,
      strengths: [
        "Strong React skills",
        "Portfolio projects"
      ],
      weaknesses: [
        "No cloud experience"
      ],
      suggestions: [
        "Add deployment projects"
      ]
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};