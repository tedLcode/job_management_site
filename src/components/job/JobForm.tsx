
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ChevronDown, Save, ArrowRight } from "lucide-react";

// Form validation schema
const formSchema = z.object({
  jobTitle: z.string().min(3, "Job title must be at least 3 characters"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  location: z.string().min(2, "Location must be at least 2 characters"),
  jobType: z.string(),
  salaryMin: z.string(),
  salaryMax: z.string(),
  description: z.string().min(30, "Description must be at least 30 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const JobForm: React.FC = () => {
  const [isJobTypeOpen, setIsJobTypeOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitle: "",
      companyName: "",
      location: "",
      jobType: "Full Time",
      salaryMin: "",
      salaryMax: "",
      description: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Job form submitted:", data);
    toast.success("Job posted successfully!");
    form.reset();
  };

  const onSaveDraft = () => {
    const data = form.getValues();
    console.log("Job draft saved:", data);
    toast.success("Draft saved successfully!");
  };

  return (
    <div className="bg-white shadow-[0_0_14px_rgba(211,211,211,0.15)] rounded-xl p-8 max-w-3xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Job Title */}
            <div>
              <FormLabel className="text-[#303030] font-medium block mb-2">Job Title</FormLabel>
              <Input 
                placeholder="Full Stack Developer" 
                {...form.register("jobTitle")}
                className="border border-gray-300 rounded-md p-3 w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-300" 
              />
              {form.formState.errors.jobTitle && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.jobTitle.message}</p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <FormLabel className="text-[#303030] font-medium block mb-2">Company Name</FormLabel>
              <Input 
                placeholder="Amazon" 
                {...form.register("companyName")}
                className="border border-gray-300 rounded-md p-3 w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-300" 
              />
              {form.formState.errors.companyName && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.companyName.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Location */}
            <div>
              <FormLabel className="text-[#303030] font-medium block mb-2">Location</FormLabel>
              <div className="relative">
                <Input 
                  placeholder="Chennai" 
                  {...form.register("location")}
                  className="border border-gray-300 rounded-md p-3 w-full pr-10 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-300" 
                />
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              </div>
              {form.formState.errors.location && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.location.message}</p>
              )}
            </div>

            {/* Job Type */}
            <div>
              <FormLabel className="text-[#303030] font-medium block mb-2">Job Type</FormLabel>
              <div className="relative">
                <div 
                  onClick={() => setIsJobTypeOpen(!isJobTypeOpen)}
                  className="border border-gray-300 rounded-md p-3 w-full flex justify-between items-center cursor-pointer"
                >
                  <span>{form.getValues("jobType") || "Full Time"}</span>
                  <ChevronDown className="text-gray-500 w-5 h-5" />
                </div>
                {isJobTypeOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                    <div 
                      className="p-3 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        form.setValue("jobType", "Internship");
                        setIsJobTypeOpen(false);
                      }}
                    >
                      Internship
                    </div>
                    <div 
                      className="p-3 bg-gray-100 cursor-pointer"
                      onClick={() => {
                        form.setValue("jobType", "Full Time");
                        setIsJobTypeOpen(false);
                      }}
                    >
                      Full Time
                    </div>
                    <div 
                      className="p-3 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        form.setValue("jobType", "Partime");
                        setIsJobTypeOpen(false);
                      }}
                    >
                      Partime
                    </div>
                    <div 
                      className="p-3 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        form.setValue("jobType", "Contract");
                        setIsJobTypeOpen(false);
                      }}
                    >
                      Contract
                    </div>
                  </div>
                )}
              </div>
              {form.formState.errors.jobType && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.jobType.message}</p>
              )}
            </div>
          </div>

          {/* Salary Range */}
          <div>
            <FormLabel className="text-[#303030] font-medium block mb-2">Salary Range</FormLabel>
            <div className="grid grid-cols-2 gap-4">
              <Input 
                placeholder="₹ 0" 
                {...form.register("salaryMin")}
                className="border border-gray-300 rounded-md p-3 w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-300" 
              />
              <Input 
                placeholder="₹ 12,00,000" 
                {...form.register("salaryMax")}
                className="border border-gray-300 rounded-md p-3 w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-300" 
              />
            </div>
            {(form.formState.errors.salaryMin || form.formState.errors.salaryMax) && (
              <p className="text-red-500 text-sm mt-1">Please enter valid salary range</p>
            )}
          </div>

          {/* Description */}
          <div>
            <FormLabel className="text-[#303030] font-medium block mb-2">Job Description</FormLabel>
            <Textarea 
              placeholder="Please share a description to let the candidate know about the job..." 
              {...form.register("description")}
              className="border border-gray-300 rounded-md p-3 w-full min-h-[150px] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-300"
            />
            {form.formState.errors.description && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.description.message}</p>
            )}
          </div>

          {/* Submit Buttons */}
          <div className="pt-4 flex justify-between">
            <button 
              type="button"
              onClick={onSaveDraft}
              className="inline-flex items-center gap-2 text-[#303030] bg-white border border-gray-300 px-6 py-3 rounded-md font-medium"
            >
              <Save className="w-5 h-5" />
              Save Draft
              <ChevronDown className="w-4 h-4" />
            </button>
            
            <button 
              type="submit"
              className="inline-flex items-center gap-2 text-white bg-[#00AAFF] px-6 py-3 rounded-md font-medium hover:bg-[#0099e6] transition-colors"
            >
              Publish
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default JobForm;
