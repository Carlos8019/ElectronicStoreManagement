using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
namespace dataAccess.Models
{
    public class Users
    {
        [Key]
        [Column("idUser")]
        public int idUser { get; set; }
        [Column("nameUser")]
        public string nameUser { get; set; }
        [Column("passwordUser")]
        public string passwordUser { get; set; }
        [Column("idProfile")]
        public int UserProfileidProfile { get; set; }
        public UserProfile UserProfiles { get; set; }
        public Users()
        {

        }
        public Users(dynamic obj)
        {
            this.nameUser = obj.nameUser;
            this.passwordUser = obj.passwordUser;
            int.TryParse(obj.UserProfileidProfile, out int tmpidProfile);
            this.UserProfileidProfile = tmpidProfile;
        }
    }
}