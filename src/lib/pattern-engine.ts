// Forever Jung - Pattern Recognition Engine
// This is what makes ChatGPT-style memory impossible to replicate

import type {
  PsychologicalProfile,
  JournalEntry,
  ArchetypalPattern,
  MemoryLink,
  EmotionalState
} from '../types/psychological-schema';

export class PatternEngine {
  private profile: PsychologicalProfile;

  constructor(profile: PsychologicalProfile) {
    this.profile = profile;
  }

  // The core function that makes Jung "remember everything"
  generateContextForPrompt(newEntry: Partial<JournalEntry>): string {
    const relevantMemories = this.findRelevantMemories(newEntry);
    const activePatterns = this.getActivePatterns();
    const cyclicalInsights = this.detectCycles(newEntry);

    return this.buildContextPrompt(relevantMemories, activePatterns, cyclicalInsights);
  }

  private findRelevantMemories(newEntry: Partial<JournalEntry>): MemoryLink[] {
    const memories: MemoryLink[] = [];

    // Emotional similarity
    if (newEntry.emotions) {
      const emotionalMatches = this.profile.journal
        .filter(entry => this.isEmotionalMatch(entry.emotions, newEntry.emotions!))
        .slice(-5); // Last 5 similar emotional states

      emotionalMatches.forEach(match => {
        memories.push({
          currentEntryId: newEntry.id || 'current',
          relatedEntryId: match.id,
          linkType: 'similar-emotion',
          strength: this.calculateEmotionalSimilarity(match.emotions, newEntry.emotions!),
          insight: `Similar ${newEntry.emotions!.primary} felt ${this.getTimeDifference(match.timestamp)} ago`
        });
      });
    }

    // Pattern recurrence
    const patternMatches = this.findPatternRecurrence(newEntry);
    memories.push(...patternMatches);

    // Symbolic connections (especially for dreams)
    if (newEntry.content) {
      const symbolMatches = this.findSymbolicConnections(newEntry.content);
      memories.push(...symbolMatches);
    }

    return memories.sort((a, b) => b.strength - a.strength).slice(0, 10);
  }

  private isEmotionalMatch(emotion1: EmotionalState, emotion2: EmotionalState): boolean {
    return emotion1.primary === emotion2.primary &&
           Math.abs(emotion1.intensity - emotion2.intensity) <= 3;
  }

  private calculateEmotionalSimilarity(emotion1: EmotionalState, emotion2: EmotionalState): number {
    const primaryMatch = emotion1.primary === emotion2.primary ? 0.5 : 0;
    const intensityMatch = 1 - (Math.abs(emotion1.intensity - emotion2.intensity) / 10) * 0.3;
    const triggerMatch = emotion1.triggers.some(t => emotion2.triggers.includes(t)) ? 0.2 : 0;

    return primaryMatch + intensityMatch + triggerMatch;
  }

  private findPatternRecurrence(newEntry: Partial<JournalEntry>): MemoryLink[] {
    const memories: MemoryLink[] = [];

    this.profile.patterns.forEach(pattern => {
      const relatedEntries = this.profile.journal
        .filter(entry => entry.relatedPatterns.includes(pattern.id))
        .slice(-3); // Last 3 manifestations of this pattern

      relatedEntries.forEach(entry => {
        memories.push({
          currentEntryId: newEntry.id || 'current',
          relatedEntryId: entry.id,
          linkType: 'same-pattern',
          strength: pattern.strengthScore,
          insight: `This matches your "${pattern.name}" pattern from ${this.getTimeDifference(entry.timestamp)} ago`
        });
      });
    });

    return memories;
  }

  private findSymbolicConnections(content: string): MemoryLink[] {
    const memories: MemoryLink[] = [];
    const keywords = this.extractKeySymbols(content);

    this.profile.dreams.forEach(dream => {
      const symbolMatches = dream.symbols.filter(s =>
        keywords.some(k => s.symbol.toLowerCase().includes(k.toLowerCase()))
      );

      if (symbolMatches.length > 0) {
        memories.push({
          currentEntryId: 'current',
          relatedEntryId: dream.id,
          linkType: 'recurring-symbol',
          strength: symbolMatches.length / keywords.length,
          insight: `Symbol "${symbolMatches[0].symbol}" appeared in dream from ${this.getTimeDifference(dream.recordedAt)}`
        });
      }
    });

    return memories;
  }

  private extractKeySymbols(content: string): string[] {
    // Simple keyword extraction - could be enhanced with NLP
    const psychologicalKeywords = [
      'father', 'mother', 'boss', 'authority', 'anger', 'fear', 'water',
      'dark', 'light', 'death', 'birth', 'chase', 'fall', 'fly', 'fight',
      'abandon', 'betray', 'control', 'reject', 'judge', 'criticize'
    ];

    return psychologicalKeywords.filter(keyword =>
      content.toLowerCase().includes(keyword)
    );
  }

  private getActivePatterns(): ArchetypalPattern[] {
    return this.profile.patterns
      .filter(p => p.strengthScore > 0.6) // Strong patterns
      .sort((a, b) => b.strengthScore - a.strengthScore)
      .slice(0, 3);
  }

  private detectCycles(_newEntry: Partial<JournalEntry>): string[] {
    const insights: string[] = [];

    // Weekly emotional cycles
    const dayOfWeek = new Date().getDay();
    const sameDayEntries = this.profile.journal
      .filter(entry => new Date(entry.timestamp).getDay() === dayOfWeek)
      .slice(-4); // Last 4 instances of this day

    if (sameDayEntries.length >= 3) {
      const commonEmotions = this.findCommonEmotions(sameDayEntries);
      if (commonEmotions.length > 0) {
        insights.push(`You often feel ${commonEmotions[0]} on ${this.getDayName(dayOfWeek)}s`);
      }
    }

    // Monthly cycles
    const dayOfMonth = new Date().getDate();
    const sameDateEntries = this.profile.journal
      .filter(entry => new Date(entry.timestamp).getDate() === dayOfMonth)
      .slice(-6); // Last 6 months

    if (sameDateEntries.length >= 3) {
      const patterns = this.findCommonPatterns(sameDateEntries);
      if (patterns.length > 0) {
        insights.push(`Around this date each month, your "${patterns[0]}" pattern tends to activate`);
      }
    }

    return insights;
  }

  private buildContextPrompt(
    memories: MemoryLink[],
    patterns: ArchetypalPattern[],
    cycles: string[]
  ): string {
    let context = "PSYCHOLOGICAL CONTEXT:\n\n";

    // Active patterns
    if (patterns.length > 0) {
      context += "ACTIVE PATTERNS:\n";
      patterns.forEach(pattern => {
        context += `- ${pattern.name}: ${pattern.description} (Strength: ${Math.round(pattern.strengthScore * 100)}%)\n`;
      });
      context += "\n";
    }

    // Relevant memories
    if (memories.length > 0) {
      context += "RELEVANT MEMORIES:\n";
      memories.slice(0, 5).forEach(memory => {
        context += `- ${memory.insight}\n`;
      });
      context += "\n";
    }

    // Cyclical insights
    if (cycles.length > 0) {
      context += "TEMPORAL PATTERNS:\n";
      cycles.forEach(cycle => {
        context += `- ${cycle}\n`;
      });
      context += "\n";
    }

    context += "GUIDANCE: Reference these specific patterns and memories in your response. Make connections explicit.";

    return context;
  }

  // Utility methods
  private getTimeDifference(pastDate: Date): string {
    const diff = Date.now() - pastDate.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return "today";
    if (days === 1) return "yesterday";
    if (days < 7) return `${days} days`;
    if (days < 30) return `${Math.floor(days / 7)} weeks`;
    if (days < 365) return `${Math.floor(days / 30)} months`;
    return `${Math.floor(days / 365)} years`;
  }

  private getDayName(dayIndex: number): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
  }

  private findCommonEmotions(entries: JournalEntry[]): string[] {
    const emotionCounts: { [key: string]: number } = {};

    entries.forEach(entry => {
      emotionCounts[entry.emotions.primary] = (emotionCounts[entry.emotions.primary] || 0) + 1;
    });

    return Object.entries(emotionCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 2)
      .map(([emotion]) => emotion);
  }

  private findCommonPatterns(entries: JournalEntry[]): string[] {
    const patternCounts: { [key: string]: number } = {};

    entries.forEach(entry => {
      entry.relatedPatterns.forEach(patternId => {
        const pattern = this.profile.patterns.find(p => p.id === patternId);
        if (pattern) {
          patternCounts[pattern.name] = (patternCounts[pattern.name] || 0) + 1;
        }
      });
    });

    return Object.entries(patternCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 2)
      .map(([name]) => name);
  }
}