import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
  challenge: string;
  experience: string;
}

export const PersonalOnboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    role: '',
    challenge: '',
    experience: ''
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const challenges = [
    "Recurring relationship conflicts in my life",
    "Feeling stuck or uncertain about major decisions",
    "Difficulty understanding my emotional patterns",
    "Imposter syndrome or self-doubt",
    "Lack of direction or purpose in life",
    "Struggling with authentic self-expression"
  ];

  const experiences = [
    "New to personal development work",
    "Tried traditional therapy - want deeper exploration",
    "Experienced with psychology or self-help",
    "Familiar with Jung's work or depth psychology",
    "Seeking systematic approach to self-discovery"
  ];

  return (
    <section className="container py-24 sm:py-32">
      <div className="max-w-4xl mx-auto">
        {step === 1 && (
          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-heading font-bold mb-4">
                Personal Discovery Session
              </CardTitle>
              <p className="text-lg text-muted-foreground font-sans">
                A confidential 30-minute consultation to explore how The Process™ can support your unique journey of self-discovery and growth.
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-semibold font-heading">Exploration</h3>
                  <p className="text-sm text-muted-foreground">Discover your unique psychological patterns and growth areas</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-semibold font-heading">Pathway</h3>
                  <p className="text-sm text-muted-foreground">Custom Process™ roadmap tailored to your personal development goals</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-semibold font-heading">Transformation</h3>
                  <p className="text-sm text-muted-foreground">Begin structured self-discovery with meaningful insights</p>
                </div>
              </div>

              <div className="text-center">
                <Button
                  onClick={() => setStep(2)}
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
                >
                  Schedule Discovery Session
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  No commitment required • Completely confidential
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-heading font-bold">
                Personal Information
              </CardTitle>
              <p className="text-muted-foreground">
                Help us prepare a tailored discovery session for your personal growth journey
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company" className="text-sm font-medium">Occupation/Field (Optional)</Label>
                    <Input
                      id="company"
                      placeholder="e.g., Teacher, Engineer, Artist, Student"
                      value={formData.company}
                      onChange={(e) => updateFormData('company', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="role" className="text-sm font-medium">Current Life Stage</Label>
                    <Input
                      id="role"
                      placeholder="e.g., Career transition, New parent, Student, Retirement"
                      value={formData.role}
                      onChange={(e) => updateFormData('role', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium">Current Personal Challenge *</Label>
                  <div className="grid md:grid-cols-2 gap-3 mt-2">
                    {challenges.map((challenge) => (
                      <label key={challenge} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="challenge"
                          value={challenge}
                          checked={formData.challenge === challenge}
                          onChange={(e) => updateFormData('challenge', e.target.value)}
                          className="text-primary"
                          required
                        />
                        <span className="text-sm">{challenge}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium">Experience Level</Label>
                  <div className="grid md:grid-cols-2 gap-3 mt-2">
                    {experiences.map((experience) => (
                      <label key={experience} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="experience"
                          value={experience}
                          checked={formData.experience === experience}
                          onChange={(e) => updateFormData('experience', e.target.value)}
                          className="text-primary"
                        />
                        <span className="text-sm">{experience}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                    Request Discovery Session
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card className="border-2 border-green-200 bg-green-50/50">
            <CardContent className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h2 className="text-2xl font-heading font-bold mb-4">Discovery Session Requested</h2>

              <p className="text-lg text-muted-foreground mb-6 max-w-md mx-auto">
                Thank you, {formData.name}. We'll contact you within 24 hours to schedule your confidential personal discovery session.
              </p>

              <div className="bg-white rounded-lg p-6 max-w-md mx-auto text-left">
                <h3 className="font-semibold mb-3">What happens next:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Personal outreach within 24 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    30-minute confidential consultation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Custom Process™ roadmap discussion
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    No obligation to proceed
                  </li>
                </ul>
              </div>

              <Button
                onClick={() => setStep(1)}
                variant="outline"
                className="mt-6"
              >
                Schedule Another Session
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};