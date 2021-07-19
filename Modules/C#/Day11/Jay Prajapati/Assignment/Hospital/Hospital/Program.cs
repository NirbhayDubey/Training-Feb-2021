using System;
using Hospital.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Hospital
{
    class Program
    {
        static void Main(string[] args)
        {
            
            //staff st = new staff();
            //st = InsertStaffDetails();
            //context.staff.Add(st);
            //st = UpdateStaff();
            //context.staff.Update(st);
            //DeleteStaff();
            //Patient pt = new Patient();
            //DisplayReportOfPatient();
            //DisplayReportOfMedicineOfPatient();
            //SummearyReport(pt);
            Console.WriteLine("-------Hospital--------\n\n");

            Console.WriteLine("A. InsertStaffDetails\n" +
                "B. UpdateStaff\n" +
                "C. DeleteStaff\n" +
                "D. Report Of Patient assined to particular doctor\n" +
                "E. Report of Medicine list of for Particular Patient\n" +
                "F. Summary Report\n" +
                "G. Exit Application");
            Console.Write("What you want to do : ");
            String op = Console.ReadLine();
            while (op != "G")
            {
                switch (op)
                {
                    case "A":
                        using (var context = new MyHospitalContext())
                        {
                            var s = InsertStaffDetails();
                            context.Add(s);
                            context.SaveChanges();
                        }
                        Console.ReadLine();
                        break;
                    case "B":
                        using(var context = new MyHospitalContext())
                        {
                            var d = UpdateStaff();
                            context.Update(d);
                            context.SaveChanges();
                        }
                        Console.ReadLine();
                        break;
                    case "C":
                       using(var context = new MyHospitalContext())
                        {
                            DeleteStaff();
                            context.SaveChanges();
                        }
                        Console.ReadLine();
                        break;
                    case "D":
                        DisplayReportOfPatient();
                        Console.ReadLine();
                        break;
                    case "E":
                        DisplayReportOfMedicineOfPatient();
                        Console.ReadLine();
                        break;
                    case "F":
                        SummaryReport();
                        Console.ReadLine();
                        break;
                    default:
                        Console.WriteLine("Choose Valid Option!!");
                        Console.ReadLine();
                        break;
                }

                Console.Clear();
                Console.WriteLine("-------Hospital--------\n\n");

                Console.WriteLine("A. InsertStaffDetails\n" +
                    "B. UpdateStaff\n" +
                    "C. DeleteStaff\n" +
                    "D. Report Of Patient assined to particular doctor\n" +
                    "E. Report of Medicine list of for Particular Patient\n" +
                    "F. Summary Report\n" +
                    "G. Exit Application");
                Console.Write("What you want to do : ");
                op = Console.ReadLine();
            }

        }
        public static staff InsertStaffDetails()
        {

            staff data = new staff();
            
            Console.Write("Enter Name: ");
            data.Name = Console.ReadLine();
            Console.Write("Enter Position: ");
            data.Position = Console.ReadLine();
            Console.Write("Enter DepatmentID: ");
            data.Department = Convert.ToInt32(Console.ReadLine());
            return data;
        }
        public static staff UpdateStaff()
        {
            staff data = new staff();
            Console.Write("Enter ID of staffMember where you want to update : ");
            data.Id = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter Name: ");
            data.Name = Console.ReadLine();
            Console.Write("Enter Position: ");
            data.Position = Console.ReadLine();
            Console.Write("Enter DepatmentID: ");
            data.Department = Convert.ToInt32(Console.ReadLine());
            return data;

        }
        public static void DeleteStaff()
        {
            using (var context = new MyHospitalContext())
            {
                Console.WriteLine("Enter ID of Staff Member whose data you want to delete : ");
                int id = Convert.ToInt32(Console.ReadLine());
                var data = from s in context.staff
                           where s.Id == id
                           select s;
                context.staff.Remove(data.FirstOrDefault());
            }


        }
        public static void DisplayReportOfPatient()
        {
            using (var context = new MyHospitalContext())
            {
                Console.Write("Enter DoctorID : ");
                int pt = Convert.ToInt32(Console.ReadLine());
                var doc = from s in context.staff
                          where s.Id == pt
                          select s;
                var dept = from d in context.Departments
                           where d.DepartmentId == doc.FirstOrDefault().Department
                           select d;
                var treats = from d in context.Treatments
                             where d.StaffId == doc.FirstOrDefault().Id
                             select d;
                //context.Treatments
                //               .Where(s => s.StaffId == doc.FirstOrDefault().Id)
                //               .ToList();

                var ptdata = context.Patients.Join(treats,
                    p => p.Id,
                    t => t.PatientId,
                    (p, t) => new
                    {
                        PatientName = p.Name,
                        Age = p.Age,
                        City = p.City,
                        Treatment = t.TreatmentName
                    });
                Console.WriteLine($"{ptdata.Count()}");
                Console.WriteLine($"\nDoctor Name : {doc.FirstOrDefault().Name}\n" +
                    $"Department : {dept.FirstOrDefault().DepartmentName}");
                if (ptdata.Count() != 0)
                {
                    Console.WriteLine("\n\nPatient Details\n\n" +
                  "Name\t\t\tAge\t\t\tCity\t\t\tTreatement");

                    foreach (var patient in ptdata)
                    {
                        Console.WriteLine($"{patient.PatientName}\t\t\t" +
                            $"{patient.Age}\t\t\t" +
                            $"{patient.City}\t\t\t" +
                            $"{patient.Treatment}");
                    }
                }
                else
                {
                    Console.WriteLine($"\nSorry! No Patient Appointed for {doc.FirstOrDefault().Name}!!");
                }

            }
        }
        public static void DisplayReportOfMedicineOfPatient()
        {
            using (var context = new MyHospitalContext())
            {
                Console.Write("Enter Name of PatientID : ");
                int pt = Convert.ToInt32(Console.ReadLine());
                var Ptdata = from s in context.Patients
                             where s.Id == pt
                             select s;
                var Md = from m in context.DrugAllotments
                         where m.PatientId == pt
                         select m;
                Console.WriteLine($"Patient ID : {Ptdata.FirstOrDefault().Id}\n" +
                    $"Patient Name : {Ptdata.FirstOrDefault().Name}\n");
                Console.WriteLine("\t|DrugName || Morning || Noon || Evening || Night|\n");
                foreach (var md in Md)
                {
                    Console.WriteLine($"\t{md.DrugName}\t" +
                        $"{md.Morning}\t" +
                        $"{md.Afternoon}\t" +
                        $"{md.Evenning}\t" +
                        $"{md.Night}");
                }
            }
        }
        public static void SummaryReport()
        {
            using (var context = new MyHospitalContext()) { 
                Console.Write("Enter PatientID : ");
            int p = Convert.ToInt32(Console.ReadLine());
            
            var Ptdata = from s in context.Patients
                         where s.Id == p
                         select s;
            var treat = from d in context.Treatments
                        where d.PatientId == Ptdata.FirstOrDefault().Id
                        select d;
            var doct = from d in context.staff
                       where d.Id == treat.FirstOrDefault().StaffId
                       select d;
            var drugs = from r in context.DrugAllotments
                       where r.PatientId == Ptdata.FirstOrDefault().Id
                       select r;
            Console.WriteLine("------- Summary --------\n");
            Console.WriteLine($"\n\nPatient ID :\t{Ptdata.FirstOrDefault().Id}\n" +
                $"Patient Name :\t{Ptdata.FirstOrDefault().Name}\n" +
                $"Patient Age :\t{Ptdata.FirstOrDefault().Age}\n" +
                $"City :\t{Ptdata.FirstOrDefault().City}\n" +
                $"Assigned Doctor :\t{doct.FirstOrDefault().Name}\n" +
                $"Treatment : \t{treat.FirstOrDefault().TreatmentName}\n");
            Console.WriteLine("\n\tDrug Details..\n");
            Console.WriteLine("\t|DrugName || Morning || Noon || Evening || Night|\n");
            foreach (var drug in drugs)
            {
                Console.WriteLine($"\t{drug.DrugName}\t" +
                    $"{drug.Morning}\t" +
                    $"{drug.Afternoon}\t" +
                    $"{drug.Evenning}\t" +
                    $"{drug.Night}\t");
            }
            }
        }
    }
}
