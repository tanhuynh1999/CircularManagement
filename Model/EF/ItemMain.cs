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
    
    public partial class ItemMain
    {
        public int item_id { get; set; }
        public string item_name { get; set; }
        public Nullable<decimal> item_vo { get; set; }
        public Nullable<decimal> item_vi { get; set; }
        public Nullable<int> file_id { get; set; }
        public string item_img { get; set; }
        public Nullable<int> item_code { get; set; }
        public Nullable<bool> item_watched { get; set; }
        public Nullable<bool> notSee { get; set; }
        public Nullable<int> table_id { get; set; }
        public string item_mvo { get; set; }
        public string item_mvi { get; set; }
        public Nullable<double> item_pro { get; set; }
        public Nullable<System.DateTime> item_datecreate { get; set; }
        public Nullable<System.DateTime> item_dateupdate { get; set; }
        public Nullable<int> item_x0 { get; set; }
        public Nullable<int> item_y0 { get; set; }
        public Nullable<int> item_x1 { get; set; }
        public Nullable<int> item_y1 { get; set; }
        public string item_target { get; set; }
        public string item_codeitem { get; set; }
        public string file_key { get; set; }
    
        public virtual FileMain FileMain { get; set; }
        public virtual TableMain TableMain { get; set; }
    }
}
