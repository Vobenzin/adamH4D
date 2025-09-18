using adamH4D.Models;
using Microsoft.AspNetCore.Mvc;

namespace adamH4D.Controllers;

public class Ulohy : Controller
{
    // GET
    public IActionResult uloha1()
    {
        var userList = new List<UserInfo>()
        {
            new UserInfo()
            {
                Name = "test 1",
                Email = "test@gmail.com",
            },
            new UserInfo()
            {
                Name = "test 2",
                Email = "test@gmail.com",
            },
            new UserInfo()
            {
                Name = "test 3",
                Email = "test@gmail.com",
            },
            new UserInfo()
            {
                Name = "test 4",
                Email = "test@gmail.com",
            }
        };
        return View(userList);
    }

    // GET
    public IActionResult uloha2()
    {
        return View();
    }
    
    public IActionResult uloha3()
    {
        return View();
    }

    public IActionResult uloha4()
    {
        var userList = new List<UserInfo>()
        {
            new UserInfo()
            {
                Name = "Adam",
                Surname = "Hal",
                Email = "test@gmail.com",
            },
            new UserInfo()
            {
                Name = "Andrej",
                Surname = "Haj",
                Email = "test@gmail.com",
            },
            new UserInfo()
            {
                Name = "Adrian",
                Surname = "Kar",
                Email = "test@gmail.com",
            },
            new UserInfo()
            {
                Name = "Anton",
                Surname = "Zil",
                Email = "test@gmail.com",
            }
        };
        return View(userList);
    }
    
    
    public IActionResult uloha5()
    {
        var userList = new List<UserInfo>()
        {
            new UserInfo()
            {
                Name = "Adam",
                Surname = "Hal",
                Email = "test@gmail.com",
            },
            new UserInfo()
            {
                Name = "Andrej",
                Surname = "Haj",
                Email = "test@gmail.com",
            },
            new UserInfo()
            {
                Name = "Adrian",
                Surname = "Kar",
                Email = "test@gmail.com",
            },
            new UserInfo()
            {
                Name = "Anton",
                Surname = "Zil",
                Email = "test@gmail.com",
            }
        };
        return View(userList);
    }

    public IActionResult uloha6()
    {
        return View();
    }

    public IActionResult uloha7()
    {
        return View();
    }
    public IActionResult uloha8()
    {
        return View();
    }

    public IActionResult uloha9()
    {
        return View();
    }
}