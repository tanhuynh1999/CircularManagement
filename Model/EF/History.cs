//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    
    public partial class History
    {
        public int his_id { get; set; }
        public Nullable<int> file_id { get; set; }
        public string his_title { get; set; }
        public Nullable<System.DateTime> his_datecreate { get; set; }
        public Nullable<int> his_status { get; set; }
    
        public virtual FileMain FileMain { get; set; }
    }
}
