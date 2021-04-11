using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CircularManagement.Controllers
{
    public class ViewController : Controller
    {
        // GET: View
        public PartialViewResult Menu()
        {
            return PartialView();
        }
    }
}