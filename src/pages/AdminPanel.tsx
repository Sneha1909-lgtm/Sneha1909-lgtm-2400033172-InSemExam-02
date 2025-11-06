import { useState } from 'react';
import { User } from '@/types/models';
import { mockOpportunities, mockInternships, mockTasks } from '@/lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Plus,
  Briefcase,
  Users,
  ListTodo,
  TrendingUp,
  Building2,
  Clock,
  CheckCircle,
} from 'lucide-react';

interface AdminPanelProps {
  user: User;
}

export default function AdminPanel({ user }: AdminPanelProps) {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const stats = {
    totalOpportunities: mockOpportunities.length,
    activeInternships: mockInternships.filter((i) => i.status === 'active').length,
    totalTasks: mockTasks.length,
    completedTasks: mockTasks.filter((t) => t.status === 'done').length,
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          <p className="text-muted-foreground">
            Manage internship opportunities, track interns, and monitor progress
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Opportunities
              </CardTitle>
              <Briefcase className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalOpportunities}</div>
              <p className="text-xs text-muted-foreground mt-1">Total posted</p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Interns
              </CardTitle>
              <Users className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">
                {stats.activeInternships}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Currently active</p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Tasks
              </CardTitle>
              <ListTodo className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalTasks}</div>
              <p className="text-xs text-muted-foreground mt-1">Assigned to interns</p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Completion Rate
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">
                {Math.round((stats.completedTasks / stats.totalTasks) * 100)}%
              </div>
              <p className="text-xs text-muted-foreground mt-1">Overall progress</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="opportunities" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            <TabsTrigger value="interns">Interns</TabsTrigger>
            <TabsTrigger value="evaluations">Evaluations</TabsTrigger>
          </TabsList>

          {/* Opportunities Tab */}
          <TabsContent value="opportunities" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Internship Opportunities</h2>
              <Button onClick={() => setShowCreateForm(!showCreateForm)}>
                <Plus className="h-4 w-4 mr-2" />
                Post New Opportunity
              </Button>
            </div>

            {showCreateForm && (
              <Card className="border-2 border-primary/50">
                <CardHeader>
                  <CardTitle>Create New Opportunity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Title</label>
                      <Input placeholder="e.g., Frontend Developer Intern" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Company</label>
                      <Input placeholder="Company name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Domain</label>
                      <Input placeholder="e.g., Web Development" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Duration (weeks)</label>
                      <Input type="number" placeholder="12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Stipend (optional)</label>
                      <Input type="number" placeholder="15000" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Location</label>
                      <Input placeholder="Remote / Hybrid / On-site" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Description</label>
                    <Textarea
                      placeholder="Describe the internship role and responsibilities..."
                      rows={4}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Requirements (comma-separated)
                    </label>
                    <Input placeholder="React, TypeScript, Git" />
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1">Create Opportunity</Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowCreateForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockOpportunities.map((opp) => (
                <Card key={opp.id} className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{opp.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Building2 className="h-4 w-4" />
                          {opp.company}
                        </div>
                      </div>
                      <Badge
                        variant={opp.status === 'open' ? 'default' : 'secondary'}
                      >
                        {opp.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {opp.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        {opp.durationWeeks} weeks
                      </div>
                      {opp.stipend && (
                        <div className="font-medium text-success">
                          ₹{opp.stipend.toLocaleString()}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        View Applications
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Interns Tab */}
          <TabsContent value="interns" className="space-y-4">
            <h2 className="text-2xl font-bold">Active Interns</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockInternships.map((internship) => {
                const opportunity = mockOpportunities.find(
                  (o) => o.id === internship.opportunityId
                );
                const internTasks = mockTasks.filter(
                  (t) => t.internshipId === internship.id
                );
                const completed = internTasks.filter((t) => t.status === 'done').length;

                return (
                  <Card key={internship.id} className="border-2">
                    <CardHeader>
                      <CardTitle className="text-base">
                        {opportunity?.title}
                      </CardTitle>
                      <Badge variant="outline" className="w-fit capitalize">
                        {internship.status}
                      </Badge>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm space-y-1">
                        <p className="text-muted-foreground">
                          Started:{' '}
                          {new Date(internship.startDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">
                            {completed}/{internTasks.length} tasks
                          </span>
                        </div>
                        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-success transition-all"
                            style={{
                              width: `${
                                (completed / internTasks.length) * 100
                              }%`,
                            }}
                          />
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Evaluations Tab */}
          <TabsContent value="evaluations" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Intern Evaluations</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Evaluation
              </Button>
            </div>
            <Card className="border-2">
              <CardContent className="p-8 text-center">
                <CheckCircle className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <h3 className="font-semibold mb-1">No evaluations yet</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Create evaluations to track intern performance
                </p>
                <Button>Get Started</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
