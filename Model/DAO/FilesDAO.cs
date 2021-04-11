using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model.EF;

namespace Model.DAO
{
    public class FilesDAO
    {
        DATAOCREntities db = new DATAOCREntities();
        public int create(FileMain fileMain)
        {
            try
            {
                db.FileMains.Add(fileMain);
                db.SaveChanges();
                return 1;
            }
            catch (Exception)
            {
                return 2;
            }
        }
    }
}
