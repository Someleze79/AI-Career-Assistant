// Import OpenAI SDK
const OpenAI = require("openai");

// Import file system
const fs = require("fs");

// Import PDF parser
const pdfParse = require("pdf-parse");

// OpenAI Configuration

// Create OpenAI instance
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Analyze Resume

exports.analyzeResume = async (
  req,
  res
) => {

  try {

    // Get resume text
    const { resumeText } = req.body;

    // Validate input
    if (!resumeText) {

      return res.status(400).json({
        message: "Resume text is required",
      });
    }

    // Send prompt to OpenAI
    const response =
      await openai.chat.completions.create({

        model: "gpt-4o-mini",

        messages: [
          {
            role: "system",
            content:
              "You are an expert ATS resume analyzer.",
          },

          {
            role: "user",
            content: `
Analyze this resume and provide:

1. ATS Score out of 100
2. Strengths
3. Weaknesses
4. Missing Skills
5. Improvement Suggestions

Resume:
${resumeText}
            `,
          },
        ],

        temperature: 0.7,
      });

    // Return analysis
    res.status(200).json({
      analysis:
        response.choices[0].message.content,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "AI analysis failed",
    });
  }
};

// Generate Cover Letter

exports.generateCoverLetter = async (
  req,
  res
) => {

  try {

    // Get form data
    const {
      jobTitle,
      company,
      skills,
      experience,
    } = req.body;

    // Validate input
    if (
      !jobTitle ||
      !company ||
      !skills ||
      !experience
    ) {

      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Generate AI cover letter
    const response =
      await openai.chat.completions.create({

        model: "gpt-4o-mini",

        messages: [
          {
            role: "system",
            content:
              "You are a professional career assistant.",
          },

          {
            role: "user",
            content: `
Write a professional cover letter.

Job Title:
${jobTitle}

Company:
${company}

Skills:
${skills}

Experience:
${experience}

The cover letter should be professional,
modern, and concise.
            `,
          },
        ],

        temperature: 0.7,
      });

    // Return generated cover letter
    res.status(200).json({
      coverLetter:
        response.choices[0].message.content,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        "Failed to generate cover letter",
    });
  }
};

// Analyze Uploaded PDF Resume

exports.analyzeResumePDF = async (
  req,
  res
) => {

  try {

    // Check uploaded file
    if (!req.file) {

      return res.status(400).json({
        message: "No PDF uploaded",
      });
    }

    // Read uploaded PDF
    const dataBuffer =
      fs.readFileSync(req.file.path);

    // Extract text from PDF
    const pdfData =
      await pdfParse(dataBuffer);

    // Extracted resume text
    const resumeText =
      pdfData.text;

    // Send extracted text to OpenAI
    const response =
      await openai.chat.completions.create({

        model: "gpt-4o-mini",

        messages: [
          {
            role: "system",
            content:
              "You are an expert ATS resume analyzer.",
          },

          {
            role: "user",
            content: `
Analyze this resume and provide:

1. ATS Score out of 100
2. Strengths
3. Weaknesses
4. Missing Skills
5. Improvement Suggestions

Resume:
${resumeText}
            `,
          },
        ],

        temperature: 0.7,
      });

    // Return AI analysis
    res.status(200).json({
      analysis:
        response.choices[0].message.content,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        "PDF resume analysis failed",
    });
  }
};

// Generate Interview Questions

exports.generateInterviewQuestions =
  async (
    req,
    res
  ) => {

    try {

      // Get request data
      const {
        role,
        difficulty,
        category,
      } = req.body;

      // Validate input
      if (!role || !difficulty) {

        return res.status(400).json({
          message:
            "Role and difficulty are required",
        });
      }

      // Generate AI questions
      const response =
        await openai.chat.completions.create({

          model: "gpt-4o-mini",

          messages: [
            {
              role: "system",
              content:
                "You are an expert technical interviewer.",
            },

            {
              role: "user",
              content: `
Generate 10 ${category} interview questions.

Role:
${role}

Difficulty:
${difficulty}

Requirements:
- Relevant to the role
- Appropriate for the difficulty level
- Professional interview format
              `,
            },
          ],

          temperature: 0.7,
        });

      // Return AI response
      res.status(200).json({
        questions:
          response.choices[0].message.content,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Failed to generate interview questions",
      });
    }
  };

// AI Career Coach

exports.careerCoach = async (
  req,
  res
) => {

  try {

    const { message } = req.body;

    if (!message) {

      return res.status(400).json({
        message: "Message is required",
      });
    }

    const response =
      await openai.chat.completions.create({

        model: "gpt-4o-mini",

        messages: [

          {
            role: "system",
            content: `
You are an expert AI Career Coach.

Help users with:

- Career planning
- CV improvement
- Portfolio feedback
- LinkedIn optimization
- Job searching
- Interview preparation
- Salary negotiation
- Career growth

Give detailed, practical advice.
Respond in a professional but friendly tone.
            `,
          },

          {
            role: "user",
            content: message,
          },

        ],

        temperature: 0.7,

      });

    res.status(200).json({

      reply:
        response.choices[0].message.content,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        "Failed to generate career advice",
    });
  }
};