import { useState } from 'react';
import OpportunityCard from '@/components/OpportunityCard';
import { mockOpportunities } from '@/lib/mockData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Briefcase, TrendingUp, Users, Award } from 'lucide-react';

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const domains = Array.from(new Set(mockOpportunities.map((o) => o.domain)));

  const filteredOpportunities = mockOpportunities.filter((opp) => {
    const matchesSearch =
      opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.domain.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDomain = !selectedDomain || opp.domain === selectedDomain;

    return matchesSearch && matchesDomain && opp.status === 'open';
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="px-4 py-1.5">
              <TrendingUp className="h-3 w-3 mr-1.5" />
              Find Your Dream Internship
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Launch Your Career with{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Remote Internships
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with top companies, track your progress, and build real-world experience
              with guided mentorship and professional feedback.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { icon: Briefcase, label: 'Opportunities', value: mockOpportunities.length },
                { icon: Users, label: 'Active Interns', value: '150+' },
                { icon: Award, label: 'Success Rate', value: '95%' },
                { icon: TrendingUp, label: 'Avg. Stipend', value: '₹15K' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-lg bg-card border shadow-sm hover:shadow-md transition-shadow"
                >
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search by title, company, or domain..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedDomain === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedDomain(null)}
            >
              All Domains
            </Button>
            {domains.map((domain) => (
              <Button
                key={domain}
                variant={selectedDomain === domain ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedDomain(domain)}
              >
                {domain}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              Available Opportunities
              <span className="text-muted-foreground font-normal ml-2">
                ({filteredOpportunities.length})
              </span>
            </h2>
          </div>

          {filteredOpportunities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOpportunities.map((opportunity) => (
                <OpportunityCard key={opportunity.id} opportunity={opportunity} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4">
              <div className="max-w-md mx-auto space-y-4">
                <div className="h-20 w-20 mx-auto rounded-full bg-muted flex items-center justify-center">
                  <Search className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold">No opportunities found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedDomain(null);
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
