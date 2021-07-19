using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Day11_assign.Models;

namespace Day11_assign
{
    class Program
    {
        static void Main(string[] args)
        {
            var context = new MyDBOContext();
            Console.WriteLine("Hospital Database");
            Console.WriteLine("-----------------");
            Console.WriteLine("" +
                "1. InsertStaffDetails\n" +
                "2. UpdateStaff\n" +
                "3. DeleteStaff\n" +
                "4. Report Of Patient assined to particular doctor\n" +
                "5. Report of Medicine list of for Particular Patient\n" +
                "6. Summary Report\n" +
                "7. Exit Application");
            Console.Write("Enter Any Number from Above   : ");
            String option = Console.ReadLine();
            while (option != "7")
            {
                switch (option)
                {
                    case "1":
                        staff data = new staff();
                        Console.Write("Enter ID: ");
                        data.Id = Convert.ToInt32(Console.ReadLine());
                        Console.Write("Enter Name: ");
                        data.Name = Console.ReadLine();
                        Console.Write("Enter Position: ");
                        data.Position = Console.ReadLine();
                        Console.Write("Enter DepatmentID: ");
                        data.Department = Convert.ToInt32(Console.ReadLine());
                        context.SaveChanges();

                
                        break;
                    case "2":
                        staff Data = new staff();
                        Console.Write("Enter ID of staffmember where you want to update : ");
                        Data.Id = Convert.ToInt32(Console.ReadLine());
                        Console.Write("Enter Name: ");
                        Data.Name = Console.ReadLine();
                        Console.Write("Enter Position: ");
                        Data.Position = Console.ReadLine();
                        Console.Write("Enter DepatmentID: ");
                        Data.Department = Convert.ToInt32(Console.ReadLine()); Console.ReadLine();
                        context.SaveChanges();

                        break;

                    case "3":
                        DeleteStaff();
                        Console.ReadLine();
                        context.SaveChanges();

                        break;
                    case "4":
                        DisplayReportOfPatient();
                        Console.ReadLine();
                        context.SaveChanges();

                        break;
                    case "5":
                        DisplayReportOfMedicineOfPatient();
                        Console.ReadLine();
                        context.SaveChanges();

                        break;
                    case "6":
                        break;
                    default:
                        Console.WriteLine("Choose Valid Option!!");
                        Console.ReadLine();
                        context.SaveChanges();

                        break;
                }

                Console.Clear();

                Console.WriteLine(
                    "1. InsertStaffDetails\n" +
                    "2. UpdateStaff\n" +
                    "3. DeleteStaff\n" +
                    "4. Report Of Patient assined to particular doctor\n" +
                    "5. Report of Medicine list of for Particular Patient\n" +
                    "6. Summary Report\n" +
                    "7. Exit Application");
                Console.Write("Choose from above options  : ");
                option = Console.ReadLine();
            }

        }
     
     
        public static void DeleteStaff()
        {
            var del = new MyDBOContext();
            Console.WriteLine("Enter ID of Staff Member whose data you want to delete : ");
            int id = Convert.ToInt32(Console.ReadLine());
            var data = from s in del.staff
                       where s.Id == id
                       select s;
            del.staff.Remove(data.FirstOrDefault());


        }
        public static void DisplayReportOfPatient()
        {
            var pat = new MyDBOContext();
            Console.Write("Enter Name of PatientID : ");
            int pt = Convert.ToInt32(Console.ReadLine());
            var Patientdata = from s in pat.Patients
                         where s.Id == pt
                         select s;
            var treatment = from d in pat.Treatments
                        where d.PatientId == Patientdata.FirstOrDefault().Id
                        select d;
            var doctor = from d in pat.staff
                       where d.Id == treatment.FirstOrDefault().StaffId
                       select d;
            Console.WriteLine($"Patient ID : \t{Patientdata.FirstOrDefault().Id}\n" +
                $"Patient Name : \t{Patientdata.FirstOrDefault().Name}\n" +
                $"City : \t{Patientdata.FirstOrDefault().City}\n" +
                $"Assigned Doctor : \t{doctor.FirstOrDefault().Name}\n" +
                $"Treatment : \t{treatment.FirstOrDefault().TreatmentName}");

        }
        public static void DisplayReportOfMedicineOfPatient()
        {
            var context = new MyDBOContext();
            Console.Write("Enter Name of PatientID : ");
            int pt = Convert.ToInt32(Console.ReadLine());
            var Patientdata = from s in context.Patients
                         where s.Id == pt
                         select s;
            var Medtime = from m in context.DrugAllotments
                     where m.PatientId == pt
                     select m;
            Console.WriteLine($"Patient ID : {Patientdata.FirstOrDefault().Id}\n" +
                $"Patient Name : {Patientdata.FirstOrDefault().Name}\n");
            Console.WriteLine("DrugName|\t|Morning|\t|Afternoon|\t|Evening|\t|Night|");
            foreach (var medtime in Medtime)
            {
                Console.WriteLine($"{medtime.DrugName}\t\t" +
                    $"{medtime.Morning}\t\t" +
                    $"{medtime.Afternoon}\t\t" +
                    $"{medtime.Evenning}\t\t" +
                    $"{medtime.Night}");
            }
        }

        public static void SummaryReport()
        {
           
        }
    }
}
