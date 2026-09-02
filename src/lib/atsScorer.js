// ATS Resume Scoring Engine
// Scores a resume based on common Applicant Tracking System criteria

export function calculateATSScore(resume) {
  const checks = [];
  let score = 0;
  const maxScore = 100;

  // 1. Contact Information (15 pts)
  const hasName = resume.personalInfo.fullName && resume.personalInfo.fullName.trim().length > 0;
  const hasEmail = resume.personalInfo.email && resume.personalInfo.email.trim().length > 0;
  const hasPhone = resume.personalInfo.phone && resume.personalInfo.phone.trim().length > 0;
  const hasLocation = resume.personalInfo.location && resume.personalInfo.location.trim().length > 0;
  const hasLinkedIn = resume.personalInfo.linkedIn && resume.personalInfo.linkedIn.trim().length > 0;

  const contactFields = [hasName, hasEmail, hasPhone, hasLocation, hasLinkedIn];
  const contactCount = contactFields.filter(Boolean).length;
  const contactScore = (contactCount / 5) * 15;
  score += contactScore;
  checks.push({
    category: 'Contact Information',
    score: contactScore,
    max: 15,
    detail: `${contactCount}/5 fields filled (name, email, phone, location, LinkedIn)`,
  });

  // 2. Professional Summary (10 pts)
  const summary = resume.personalInfo.summary || '';
  if (summary.trim().length >= 50) {
    score += 10;
    checks.push({ category: 'Professional Summary', score: 10, max: 10, detail: 'Summary is 50+ characters' });
  } else if (summary.trim().length > 0) {
    score += 5;
    checks.push({ category: 'Professional Summary', score: 5, max: 10, detail: 'Summary is too short (aim for 50+ chars)' });
  } else {
    checks.push({ category: 'Professional Summary', score: 0, max: 10, detail: 'No summary added' });
  }

  // 3. Work Experience (25 pts)
  const experiences = resume.experience || [];
  if (experiences.length >= 2) {
    score += 25;
    checks.push({ category: 'Work Experience', score: 25, max: 25, detail: `${experiences.length} jobs listed (2+ recommended)` });
  } else if (experiences.length === 1) {
    score += 15;
    checks.push({ category: 'Work Experience', score: 15, max: 25, detail: 'Only 1 job listed (add 2+ for full score)' });
  } else {
    checks.push({ category: 'Work Experience', score: 0, max: 25, detail: 'No work experience added' });
  }

  // 4. Experience descriptions quality (10 pts)
  let descScore = 0;
  experiences.forEach(exp => {
    if (exp.description && exp.description.trim().length >= 30) descScore += 5;
  });
  descScore = Math.min(descScore, 10);
  score += descScore;
  checks.push({
    category: 'Experience Details',
    score: descScore,
    max: 10,
    detail: descScore >= 10 ? 'Descriptions are detailed' : 'Add detailed descriptions (30+ chars) per role',
  });

  // 5. Education (15 pts)
  const education = resume.education || [];
  if (education.length >= 1) {
    const hasDegree = education[0].degree && education[0].degree.trim().length > 0;
    const hasInstitution = education[0].institution && education[0].institution.trim().length > 0;
    if (hasDegree && hasInstitution) {
      score += 15;
      checks.push({ category: 'Education', score: 15, max: 15, detail: 'Degree and institution provided' });
    } else {
      score += 8;
      checks.push({ category: 'Education', score: 8, max: 15, detail: 'Education entry is incomplete' });
    }
  } else {
    checks.push({ category: 'Education', score: 0, max: 15, detail: 'No education added' });
  }

  // 6. Skills (15 pts)
  const skills = resume.skills || [];
  if (skills.length >= 8) {
    score += 15;
    checks.push({ category: 'Skills', score: 15, max: 15, detail: `${skills.length} skills listed (8+ recommended)` });
  } else if (skills.length >= 4) {
    score += 10;
    checks.push({ category: 'Skills', score: 10, max: 15, detail: `${skills.length} skills (add 8+ for full score)` });
  } else if (skills.length > 0) {
    score += 5;
    checks.push({ category: 'Skills', score: 5, max: 15, detail: `Only ${skills.length} skills (add 8+ for full score)` });
  } else {
    checks.push({ category: 'Skills', score: 0, max: 15, detail: 'No skills added' });
  }

  // 7. Keyword optimization (10 pts) - action verbs
  const allText = [
    summary,
    ...experiences.map(e => e.description || ''),
  ].join(' ').toLowerCase();

  const actionVerbs = ['led', 'managed', 'developed', 'created', 'improved', 'built', 'designed', 'implemented', 'achieved', 'increased', 'reduced', 'launched', 'optimized', 'analyzed', 'coordinated', 'delivered'];
  const matchedVerbs = actionVerbs.filter(v => allText.includes(v));
  const verbScore = Math.min((matchedVerbs.length / 3) * 10, 10);
  score += verbScore;
  checks.push({
    category: 'Action Keywords',
    score: verbScore,
    max: 10,
    detail: matchedVerbs.length >= 3 ? 'Great use of action verbs' : `Found ${matchedVerbs.length} action verbs (use 3+ like: led, developed, improved)`,
  });

  score = Math.min(Math.round(score), maxScore);

  // Determine grade
  let grade = 'F';
  let label = 'Needs Work';
  if (score >= 90) { grade = 'A+'; label = 'Excellent'; }
  else if (score >= 80) { grade = 'A'; label = 'Very Good'; }
  else if (score >= 70) { grade = 'B'; label = 'Good'; }
  else if (score >= 60) { grade = 'C'; label = 'Fair'; }
  else if (score >= 40) { grade = 'D'; label = 'Below Average'; }

  return { score, grade, label, checks };
}
