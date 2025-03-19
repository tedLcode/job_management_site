
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

// Form validation schema
const formSchema = z.object({
  jobTitle: z.string().min(3, "Job title must be at least 3 characters"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  location: z.string().min(2, "Location must be at least 2 characters"),
  locationType: z.string(),
  salary: z.string().min(1, "Salary is required"),
  experience: z.string(),
  description: z.string().min(30, "Description must be at least 30 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const JobForm: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitle: "",
      companyName: "",
      location: "",
      locationType: "onsite",
      salary: "",
      experience: "1-3",
      description: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Job form submitted:", data);
    toast.success("Job posted successfully!");
    form.reset();
  };

  return (
    <div className="bg-white shadow-[0_0_14px_rgba(211,211,211,0.15)] rounded-xl p-8 max-w-3xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Job Title */}
          <FormField
            control={form.control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#303030] font-bold">Job Title</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="e.g. Full Stack Developer" 
                    {...field}
                    className="border-[#EAEAEA] focus-visible:ring-[#8636F8]" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Company Name */}
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#303030] font-bold">Company Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="e.g. Google" 
                    {...field}
                    className="border-[#EAEAEA] focus-visible:ring-[#8636F8]" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#303030] font-bold">Location</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g. New York" 
                      {...field}
                      className="border-[#EAEAEA] focus-visible:ring-[#8636F8]" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Location Type */}
            <FormField
              control={form.control}
              name="locationType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#303030] font-bold">Location Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-[#EAEAEA] focus:ring-[#8636F8]">
                        <SelectValue placeholder="Select location type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="onsite">Onsite</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Salary and Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#303030] font-bold">Salary (per month)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g. ₹50k - ₹80k" 
                      {...field}
                      className="border-[#EAEAEA] focus-visible:ring-[#8636F8]" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Experience */}
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#303030] font-bold">Experience Required</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-[#EAEAEA] focus:ring-[#8636F8]">
                        <SelectValue placeholder="Select experience range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 year</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5+">5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#303030] font-bold">Job Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Describe job responsibilities, requirements, and benefits..." 
                    className="min-h-[150px] border-[#EAEAEA] focus-visible:ring-[#8636F8]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="pt-4">
            <button 
              type="submit"
              className="w-full md:w-auto text-white text-base font-bold cursor-pointer bg-[#8636F8] px-6 py-3 rounded-[10px] border-[none] hover:bg-[#7429e3] transition"
            >
              Post Job
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default JobForm;
