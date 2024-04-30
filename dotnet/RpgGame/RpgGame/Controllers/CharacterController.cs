
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RpgGame.Models;
using RpgGame.Services.CharacterService;

namespace RpgGame.Controllers
{
    /* The `[ApiController]` attribute is used to indicate that the controller class should be treated
    as an HTTP API controller. It enables several API features such as automatic model validation,
    automatic HTTP 400 responses for invalid models, and binding source parameter inference. */
    [ApiController] //indicates all types served as HTTP API Response & enable several API Features
    
    /* The `[Route("rpg/[controller]")]` attribute is used to specify the route template for the
    controller. In this case, it sets the route template to "rpg/[controller]". The `[controller]`
    token is a placeholder that will be replaced with the name of the controller class (in this
    case, "CharacterController"). */
    [Route("rpg/[controller]")] // that's how we find the specific controller when we make a service call ("api is optional, let's change it)
    public class CharacterController : ControllerBase
    {
        private readonly ICharacterService _characterService;
        public CharacterController(ICharacterService characterService)
        {
            _characterService = characterService;
            
        }

        [HttpGet("GetAll")]
        public ActionResult<List<Character>> Get(){
            return Ok(_characterService.GetAllCharacters());
        }

        [HttpGet("{id}")]
        public ActionResult<List<Character>> GetCharacter(int id){
            return Ok(_characterService.GetCharacterByID(id));
        }
        [HttpPost]
        public ActionResult<List<Character>> AddCharacter(Character NewCharacter){
            return Ok(_characterService.AddCharacter(NewCharacter));
        }



    }
}