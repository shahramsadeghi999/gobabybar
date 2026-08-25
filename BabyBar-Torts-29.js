const examData = [
    {
        id: 1,
        topic: "Strict Liability / Abnormally Dangerous Activities",
        fp: "A chemical company's plant was located in a residential community. The manufacturing process used at the plant generated a toxic chemical as a byproduct. The chemical was stored in a state-of-the-art tank on the site before being moved to an off-site disposal facility. The on-site storage arrangement conformed to the requirements of reasonable care and to the applicable government regulations. However, the storage of the toxic chemical created a foreseeable and highly significant risk of physical harm even when reasonable care was exercised.\n\nDespite the chemical company's proper use and care of the storage tank, toxic fumes escaped from the tank and made residents of the area seriously ill.\n\nNo state or federal statutes address the issue of the company's liability.",
        q: "In an action by one of the affected residents against the chemical company, will the resident be likely to prevail?",
        opts: [
            "No, because the chemical company conformed to the requirements of reasonable care and to the applicable government regulations.",
            "No, because the chemical company used a state-of-the-art storage tank.",
            "Yes, because the chemical company is strictly liable in tort for any harm caused by the toxic chemicals it produced.",
            "Yes, because the storage of toxic chemicals in a residential community created a highly significant risk of physical harm even when reasonable care was exercised."
        ],
        ans: 3,
        exp: "(D) is the best response, because the storage activity here was an abnormally dangerous activity, triggering strict liability.\n\nThe key to this question is to recognize that the company's storage of toxic chemicals was likely to be an \"abnormally dangerous activity,\" thus triggering strict liability. An activity is abnormally dangerous if it creates a foreseeable and highly significant risk of physical harm even when reasonable care is exercised, and the activity is not one of common usage. The statement of facts matches up almost word-for-word with this definition, particularly that it created a highly significant risk of physical harm even when reasonable care was exercised. \n\n(A) and (B) are not the best responses because the company's conformity with the requirements of reasonable care, applicable government regulations, and use of a state-of-the-art storage tank are not sufficient to let the company escape strict liability for conducting an abnormally dangerous activity. (C) is not the best response because it is overly broad in saying that the company is liable for \"any harm caused by the toxic chemicals it produced\" instead of focusing on the specific abnormally dangerous activity of storing them."
    },
    {
        id: 2,
        topic: "Negligence / Burden of Proof & Alternative Liability",
        fp: "A pedestrian was injured when hit by a chair that was thrown from an upper-story hotel window. The pedestrian sued the occupants of all the rooms from which the chair might have been thrown.\n\nAt trial, the pedestrian has been unable to offer any evidence as to the exact room from which the chair was thrown. The defendants have filed a motion for a directed verdict.",
        q: "Should the court grant the motion?",
        opts: [
            "No, because it is unreasonable to expect the pedestrian to prove which of the defendants caused the harm.",
            "No, because of the doctrine of alternative liability.",
            "Yes, because a plaintiff always has the burden to prove that a particular defendant's conduct was the factual cause of the plaintiff's physical harm.",
            "Yes, because the pedestrian has failed to offer evidence that the defendants jointly engaged in tortious conduct."
        ],
        ans: 3,
        exp: "(D) is the best response, because, in the absence of proof of which defendant(s) threw the chair, the factfinder could not reasonably find any defendant(s) liable unless the plaintiff showed that all defendants acted tortiously and in concert with each other.\n\nNormally, the plaintiff cannot establish a prima facie case unless the plaintiff carries the burden of proving that the defendant's tortious conduct was a cause in fact of the plaintiff's harm. The exception is the \"alternative liability\" doctrine, which shifts the burden of proof to defendants only when the plaintiff proves that *each* engaged in tortious conduct that exposed the plaintiff to a risk of harm. Here, the pedestrian has not proved that each of the many room-occupants engaged in some conduct that was tortious. Furthermore, the plaintiff has offered no evidence of \"acting in concert\" (jointly engaging in tortious conduct). Therefore, the plaintiff has failed to carry his burden.\n\n(A) is not the best response because it is generally expected that a plaintiff prove which defendant caused the harm, unless a special exception applies (which it does not here). (B) is not the best response because the alternative liability doctrine does not apply unless each defendant is shown to have acted tortiously. (C) is not the best response because the word \"always\" is too broad; as noted, there are exceptions (like alternative liability or acting in concert) where the burden shifts or is shared."
    },
    {
        id: 3,
        topic: "Battery / Contributory Negligence",
        fp: "A security guard, dressed in plain clothes, was working for a discount store when a customer got into a heated argument with a cashier over the store's refund policy. Without identifying himself as a security guard, the security guard suddenly grabbed the customer's arm. The customer attempted to push the security guard away, and the security guard knocked the customer to the floor, causing injuries. The customer sued the discount store for battery on a theory of vicarious liability for the injuries caused by the security guard.\n\nThe store filed an answer to the customer's complaint, asserting the affirmative defense of contributory negligence. The customer has moved to strike the affirmative defense. Traditional rules of contributory negligence apply.",
        q: "Should the trial court grant the customer's motion?",
        opts: [
            "No, because contributory negligence is an affirmative defense to a cause of action based on vicarious liability.",
            "No, because the customer should have known that his argument with the cashier might provoke an action by a security guard.",
            "Yes, because contributory negligence is not a defense to battery.",
            "Yes, because the customer did not know that he was pushing away someone who was employed as a security guard."
        ],
        ans: 2,
        exp: "(C) is the best response, because, as a matter of law, in a contributory negligence state, contributory negligence is never a defense to any intentional tort.\n\nBattery is an intentional tort. Under standard principles of contributory negligence, courts have always held that such negligence will not be a defense to any intentional tort. For a motion to strike a defense to succeed, it must be the case that as a matter of law, the facts alleged in support of the defense would not absolve the defendant of liability. Choice (C) correctly explains why contributory negligence would not apply.\n\n(A) is not the best response because whether contributory negligence is an affirmative defense to a vicarious liability claim depends entirely on whether it would be a defense to the underlying claim against the agent (here, it is not). (B) is not the best response because the customer's behavior was at most negligent, which is not a defense to battery. (D) is not the best response because a motion to strike relies solely on a principle of law (that contributory negligence is not a defense to an intentional tort), rather than a possibly-contested issue of fact regarding the customer's state of mind."
    },
    {
        id: 4,
        topic: "Negligent Infliction of Emotional Distress / Dead Bodies",
        fp: "After her husband died in a hospital, a widow directed the hospital to send her husband's body to a funeral home for burial. The hospital negligently misidentified the husband's body and sent it to be cremated. When she was informed of the hospital's mistake, the widow suffered serious emotional distress. She has sued the hospital.",
        q: "Is the hospital likely to be held liable to the widow?",
        opts: [
            "No, because the widow did not witness the cremation.",
            "No, because the widow was never in any danger of bodily harm.",
            "Yes, because hospitals are strictly liable if they do not properly dispose of corpses.",
            "Yes, because the negligent handling of the husband's body was especially likely to cause his widow serious emotional distress."
        ],
        ans: 3,
        exp: "(D) is the best response, because a plaintiff can recover for emotional distress suffered on account of the negligent handling of the dead body of the plaintiff's close relative, even though the plaintiff herself was never in danger of physical harm from the defendant's negligence.\n\nCourts have always recognized a few types of situations as creating such a large likelihood of standalone (but severe) emotional distress to members of a small and well-defined class that members of the class are granted a right to recover for pure stand-alone emotional distress. One of these classic situations is where the defendant negligently mishandles a dead body, and a close relative of the decedent is permitted to recover for any severe emotional distress.\n\n(A) is not the best response because the plaintiff in an action for interference with a dead body need not have witnessed the mishandling of the corpse. (B) is not the best response because the action does not require the plaintiff to have been herself in the \"zone of danger\" posed by the defendant's negligent conduct. (C) is not the best response because there is no such principle of strict liability for improper disposition of a corpse; it is based on negligence, recklessness, or intentional acts."
    },
    {
        id: 5,
        topic: "Strict Liability / Assumption of Risk",
        fp: "A hot-air balloon touring company operated near a golf course. The company's property was separated from the golf course by a fence on which the company had posted signs warning people not to enter the property because of the dangers of balloons landing.\n\nA golfer on the golf course hit an errant shot onto the company's property, ignored the warning signs, and jumped over the fence to retrieve her golf ball. At about the same time, one of the company's balloons experienced mechanical problems and had to make an emergency landing to avoid crashing. The balloon, which was out of control when it landed, struck the golfer and injured her.\n\nThe jurisdiction has decided that hot-air ballooning is an abnormally dangerous activity.",
        q: "In an action by the golfer against the company, does the company have any affirmative defenses?",
        opts: [
            "No, because the balloon was out of control when it struck the golfer.",
            "No, because the company was engaged in an abnormally dangerous activity.",
            "Yes, because the balloon landed to avoid crashing.",
            "Yes, because the golfer assumed the risk by coming onto the company's property."
        ],
        ans: 3,
        exp: "(D) is the best response, because voluntary and knowing assumption of risk is a complete defense to a claim based on the conducting of an abnormally dangerous activity.\n\nA person who carries out an abnormally dangerous activity will be strictly liable to a person physically injured by it. However, a person who knowingly and voluntarily chooses to encounter the hazardous activity will be deemed to have assumed the risk of injury, precluding recovery. Here, the golfer saw the warnings, ignored them, and jumped the fence for her own benefit, knowingly assuming the risk.\n\n(A) is not the best response because the golfer's assumption of the risk acts as a complete bar to recovery even if the balloon was out of control. (B) is not the best response because assumption of risk is a defense even to abnormally dangerous activities. (C) is not the best response because the reason for the landing does not establish an affirmative defense; the defense stems entirely from the golfer's assumption of the risk."
    },
    {
        id: 6,
        topic: "Joint and Several Liability / Indivisible Harm",
        fp: "A homeowner resides downhill from a metal fabrication facility. She has sued both the owner of the facility and the supplier of a solvent used at the facility. She contends that contaminants, consisting mostly of the solvent, were released into the ground at the facility and have migrated and continue to migrate to her property, contaminating the soil, the groundwater, and her well. She alleges various acts of negligence on the part of the facility owner in causing the release of the contaminants into the ground. She also alleges that employees of the solvent supplier were negligent in frequently spilling some of the solvent onto the ground while filling a rooftop tank at the facility.\n\nThe solvent supplier has moved for summary judgment, arguing that if there was any contamination, the facility owner and the supplier independently contributed indeterminate amounts to the contamination and that therefore the homeowner cannot show how much damage each has inflicted on her.\n\nThere is no evidence that the facility owner and the solvent supplier acted in concert.",
        q: "Should the court grant the summary judgment motion?",
        opts: [
            "No, because concurrent tortfeasors are jointly and severally liable for an indivisible injury.",
            "No, because the solvent supplier is vicariously liable for damage inflicted by the facility owner.",
            "Yes, because there is no basis for allocating damages against the solvent supplier.",
            "Yes, because there is no evidence that the facility owner and the solvent supplier acted in concert."
        ],
        ans: 0,
        exp: "(A) is the best response, because the harm here appears to be indivisible, and the burden will therefore be on the solvent supplier to show what portion of the contamination was due to the conduct of each defendant.\n\nMultiple defendants each of whose tortious conduct is a substantial factor in causing an indivisible harm to the plaintiff will all be jointly and severally liable. If the harm is indivisible, the burden shifts to the defendants to prove divisibility. Because the supplier seeks to avoid responsibility for the entire injury but hasn't proven divisibility, they are jointly and severally liable.\n\n(B) is not the best response because it is not the case that the solvent supplier \"is vicariously liable for damage inflicted by the facility owner.\" They are independent concurrent tortfeasors. (C) is not the best response because the lack of a basis for allocating damages cuts in favor of joint and several liability, not against it. (D) is not the best response because the supplier will be jointly and severally liable even in the absence of any evidence that they acted in concert, so long as their independent acts caused an indivisible harm."
    },
    {
        id: 7,
        topic: "Strict Liability / Abnormally Dangerous Activities",
        fp: "A fumigation company was hired to eliminate pests in one of two buildings in a condominium complex that shared a common wall. The owners of the complex told the fumigation company that the common wall separating the infested building from the uninfested building was an impenetrable fire wall. The fumigation company did its own thorough inspection and determined that the buildings were indeed completely separated by the wall. Residents of the condominium units in the building that was to be sprayed were told to evacuate, but the residents of the uninfested building were told that they could remain while the other building was treated.\n\nDuring and shortly after the fumigation, in which a highly toxic chemical was used, many residents of the uninfested building became sick. It was determined that their illnesses were caused by the fumigation chemical.\n\nIn fact, there was a hole in the fire wall separating the two buildings, but because it could only be observed from a specific position in the crawl space underneath the floor of the uninfested building, it had not been discovered by either the fumigation company or any previous building inspector.",
        q: "Are the residents of the uninfested building likely to prevail in a tort action against the fumigation company?",
        opts: [
            "No, because the condominium complex owners were responsible for accurately conveying the condition of their buildings.",
            "No, because the fumigation company exercised a high level of care.",
            "Yes, because the fumigation company can be held strictly liable for its activity.",
            "Yes, because the fumigation company put a dangerous product into the stream of commerce."
        ],
        ans: 2,
        exp: "(C) is the best response, because the fumigation company was engaged in an abnormally dangerous activity, causing the company to become strictly liable for any physical harm caused by the activity.\n\nFumigation using highly toxic chemicals is widely recognized as an abnormally dangerous activity because it creates a highly significant risk of physical harm that cannot be eliminated even with reasonable care. As a result, strict liability applies to any physical harm resulting from it.\n\n(A) is not the best response because the company is strictly liable regardless of the building owners' inaccurate conveyance of the building conditions. (B) is not the best response because strict liability attaches even if the defendant exercises the highest imaginable level of care. (D) is not the best response because this is not a strict products liability case (the fumigator did not sell or distribute the chemical into the stream of commerce; it provided a service using the chemical)."
    },
    {
        id: 8,
        topic: "Strict Products Liability / Duty to Warn",
        fp: "A homeowner was using a six-foot stepladder to clean the furnace in his home. The homeowner broke his arm when he slipped and fell from the ladder. The furnace had no warnings or instructions on how it was to be cleaned.",
        q: "In a suit by the homeowner against the manufacturer of the furnace to recover for his injury, is the homeowner likely to prevail?",
        opts: [
            "No, because the danger of falling from a ladder is obvious.",
            "No, because the homeowner should have hired a professional to clean the furnace.",
            "Yes, because the furnace did not have a ladder attached to it for cleaning purposes.",
            "Yes, because the lack of warnings or instructions for how to clean the furnace made the furnace defective."
        ],
        ans: 0,
        exp: "(A) is the best response, because a manufacturer has no obligation to warn against obvious dangers.\n\nIn a strict product liability suit based on failure to warn, the manufacturer's failure to warn of a danger can make the product defective. However, the manufacturer is generally not liable for failing to warn against a danger that should be obvious to foreseeable users, such as the ordinary dangers of working on a ladder. The lack of a warning did not make the furnace defective.\n\n(B) is not the best response because there was no reason for the homeowner to believe that he could not safely maintain the furnace, nor does the law strictly require hiring a professional for basic maintenance. (C) is not the best response because the absence of a built-in ladder does not make a furnace defective; standard stepladders are ordinary household items. (D) is not the best response because a manufacturer is not required to warn of the obvious dangers associated with climbing a standard ladder to reach a product."
    },
    {
        id: 9,
        topic: "Assault / Imminent Apprehension",
        fp: "A college student was asleep in his bed in a college dormitory when his roommate, in a drunken fury, entered their room intending to attack the student with an ice pick while he slept. Fortunately, the phone rang and awakened the student. The roommate retreated quickly and threw the ice pick under his own bed in the same room. The next day, the student heard from friends about the roommate's murderous plans and later found the ice pick under the roommate's bed. Even though the college expelled his roommate, the student remained extremely upset and afraid to sleep.",
        q: "In a suit against the roommate for assault, will the student prevail?",
        opts: [
            "No, because the roommate did not touch the student.",
            "No, because the student was not awake when the roommate entered the room and was unaware until later that the roommate was intending to attack him.",
            "Yes, because it was reasonable for the student to feel afraid of sleeping in his room afterward.",
            "Yes, because the roommate intended to inflict serious harm."
        ],
        ans: 1,
        exp: "(B) is the best response, because assault requires that the plaintiff become aware of the defendant's attempt to inflict a harmful or offensive contact before the attempt has been terminated.\n\nThe defendant is liable for assault if he acts intending to cause a harmful or offensive contact or an imminent apprehension of such contact, and the plaintiff is thereby put in such imminent apprehension. If the plaintiff does not become aware of the attempt until after it is terminated, there is no assault. Because the student was asleep and did not apprehend the threat until the next day, there is no assault.\n\n(A) is not the best response because assault could occur even without any touching (apprehension of touching is sufficient). (C) is not the best response because fear felt after the threat of imminent harm has passed does not suffice for assault. (D) is not the best response because it fails to address the requirement that the plaintiff actually experience imminent apprehension at the time of the threat."
    },
    {
        id: 10,
        topic: "Proximate Cause / Rescue Doctrine",
        fp: "When a tire of a motorist's car suffered a blowout, the car rolled over and the motorist was badly injured. Vehicles made by the manufacturer of the motorist's car have been found to be negligently designed, making them dangerously prone to rolling over when they suffer blowouts. A truck driver who was driving behind the motorist when the accident occurred stopped to help. Rescue vehicles promptly arrived, and the truck driver walked along the side of the road to return to his truck. As he approached his truck, he was struck and injured by a speeding car. The truck driver has sued the manufacturer of the injured motorist's car.",
        q: "Is the truck driver likely to prevail in a suit against the car manufacturer?",
        opts: [
            "No, because the car manufacturer's negligence was not the proximate cause of the truck driver's injuries.",
            "No, because the truck driver assumed the risk of injury when he undertook to help the motorist.",
            "Yes, because it is foreseeable that injuries can result from rollovers.",
            "Yes, because the car manufacturer's negligence caused the dangerous situation that invited the rescue by the truck driver."
        ],
        ans: 3,
        exp: "(D) is the best response, because it was reasonably foreseeable that negligence by the car's manufacturer might lead to physical harm to a rescuer.\n\nWhere the defendant's negligence places one person at physical risk, it is quite foreseeable that another person might come to the rescue, and herself be injured. Danger invites rescue. Therefore, the manufacturer's negligence is deemed to be the proximate cause of the injuries to the rescuer. It does not matter whether the particular sequence by which the truck driver was injured (returning to his truck after ceding rescue attempts to professionals) was especially foreseeable; it is enough that accidents invoke rescue attempts, and rescuers are often injured.\n\n(A) is not the best response because the manufacturer's negligence would be considered a proximate cause under the rescue doctrine. (B) is not the best response because the truck driver would not be deemed to have voluntarily assumed the risk of injury in a rescue scenario where the defendant's tortious conduct left no reasonable alternative to avert harm to another. (C) is not the best response because it fails to specifically deal with the extended proximate-cause issue related to rescuers, which is the crux of the problem."
    },
    {
        id: 11,
        topic: "Private Nuisance",
        fp: "A gas company built a large refining facility that conformed to zoning requirements on land near a landowner's property. The landowner had his own home and a mini-golf business on his property.\n\nIn a nuisance action against the gas company, the landowner established that the refinery emitted fumes that made many people feel quite sick when they were outside on his property for longer than a few minutes. The landowner's mini-golf business had greatly declined as a consequence, and the value of his property had gone down markedly.",
        q: "Is the landowner likely to prevail?",
        opts: [
            "No, because the landowner has offered no evidence demonstrating that the gas company was negligent.",
            "No, because the refinery conforms to the zoning requirements.",
            "Yes, because the refinery has substantially and unreasonably interfered with the landowner's use and enjoyment of his property.",
            "Yes, because the value of the landowner's property has declined."
        ],
        ans: 2,
        exp: "(C) is the best response, because the decline in both the volume of the business and the value of the property demonstrate that the refinery's interference with the landowner's use and enjoyment of his property was substantial and unreasonable.\n\nA private nuisance is an intentional, substantial, and unreasonable interference with another's use and enjoyment of their property. Even if the gas company's activity is socially useful and compliant with zoning, the severe sickness and economic damage caused to the landowner make the interference substantial and unreasonable.\n\n(A) is not the best response because negligence is not a required element of nuisance; an intentional (knowing) interference that is unreasonable suffices. (B) is not the best response because zoning compliance is a factor but is not dispositive against a nuisance claim. (D) is not the best response because a mere decline in value is not enough to establish nuisance; the interference must be a substantial and unreasonable interference with use and enjoyment, which the sickness and loss of business establishes."
    },
    {
        id: 12,
        topic: "Negligence Per Se",
        fp: "A fire that started in the defendant's warehouse spread to the plaintiff's adjacent warehouse. The defendant did not intentionally start the fire, and the plaintiff can produce no evidence as to how the fire started. However, the defendant had failed to install a sprinkler system, which was required by a criminal statute. The plaintiff can produce evidence that had the sprinkler system been installed, it could have extinguished the fire before it spread.",
        q: "In an action by the plaintiff against the defendant to recover for the fire damage, is it possible for the plaintiff to prevail?",
        opts: [
            "No, because the statute provides only for criminal penalties.",
            "No, because there is no evidence that the defendant negligently caused the fire to start.",
            "Yes, because a landowner is strictly liable for harm to others caused by the spread of fire from his premises under the doctrine of Rylands v. Fletcher.",
            "Yes, because the plaintiff was harmed as a result of the defendant's violation of a statute that was meant to protect against this type of occurrence."
        ],
        ans: 3,
        exp: "(D) is the best response, because the statutory violation will cause the court to apply the doctrine of negligence per se.\n\nUnder the doctrine of negligence per se, if the defendant, without excuse, violates a statute that is designed to protect against the type of accident that occurred, the violation establishes the duty and breach elements of negligence. Here, the statute requiring sprinklers was meant to stop the spread of fires. By failing to install them, the defendant breached this duty, and the plaintiff can show but-for causation.\n\n(A) is not the best response because a criminal statute can establish the standard of care in a civil negligence case via negligence per se. (B) is not the best response because the statute imposed a duty to install sprinklers to stop *any* fire, regardless of how it started. (C) is not the best response because Rylands v. Fletcher applies to abnormally dangerous activities, and there is no evidence the warehouse fire fell into this category."
    },
    {
        id: 13,
        topic: "Negligence / Standard of Care (Mental Deficiency)",
        fp: "A schizophrenic patient who was institutionalized in a psychiatric facility pushed a nurse down a stairwell at the facility. The nurse, a paid employee of the facility who was trained to care for schizophrenic patients, was injured. The patient is an indigent whose care is paid for by the government.\n\nThe jurisdiction generally follows the rule that a person with a mental deficiency is held to the standard of a reasonable person. In a negligence action brought by the nurse against the patient, the patient's lawyer will argue that the patient should not be held responsible for the nurse's injury.",
        q: "Which of the following facts will be LEAST helpful to the patient's lawyer's argument?",
        opts: [
            "The nurse was a professional caregiver.",
            "The nurse was trained to care for patients with schizophrenia.",
            "At the time she pushed the nurse, the patient thought she was being attacked by an elephant.",
            "The patient is an indigent whose care is paid for by the government."
        ],
        ans: 3,
        exp: "(D) is the best response, because even if the patient is indigent, she can still be held liable for negligence. The patient's inability to pay a judgment has no legal bearing on whether she was negligent or has an assumption of risk defense.\n\n(A) and (B) are helpful to the defense because the nurse's status as a professional trained to handle schizophrenic patients strongly supports an implied assumption of risk defense. (C) is helpful to the defense because it shows the patient's conduct was a direct product of her schizophrenia, further establishing that the harm fell within the specific risk the trained nurse arguably assumed."
    },
    {
        id: 14,
        topic: "Defense of Property / Excessive Force",
        fp: "A farmer kept antiques in an uninhabited farmhouse on his property. The farmhouse had been broken into several times in the past, and some of the farmer's goods had been stolen. Instead of posting \"No Trespassing\" signs, the farmer decided to install an alarm system to deter intruders.\n\nWhile the farmer was in the farmhouse installing the alarm system, he heard a window open in the adjoining room. The farmer crept very quietly to the door of the room, threw the door open, and found an intruder, a young child. The farmer immediately struck the child, a ten-year-old girl, very hard in the face, breaking her nose.",
        q: "In an action on behalf of the child against the farmer to recover for the injury to her nose, is the child likely to prevail?",
        opts: [
            "No, because the farmer did not use deadly force.",
            "No, because the farmer had probable cause to believe that the child was a thief.",
            "Yes, because the farmer should have posted a \"No Trespassing\" sign.",
            "Yes, because the farmer used excessive force."
        ],
        ans: 3,
        exp: "(D) is the best response, because the farmer should have realized that the child's entry could have been repelled by lesser force.\n\nA property owner is privileged to use reasonable, non-deadly force to prevent or end a trespasser's intrusion. However, the force cannot be excessive. Striking a ten-year-old girl hard enough to break her nose is completely disproportionate to the threat she posed to the property and thus constitutes excessive force, exposing the farmer to liability for battery.\n\n(A) is not the best response because even non-deadly force can be unreasonable and excessive. (B) is not the best response because probable cause that someone is a thief does not grant the right to use excessive physical force to repel the intrusion. (C) is not the best response because posting a sign is not a prerequisite to the privilege to defend property, but rather, the true issue is the unreasonableness of the force used."
    },
    {
        id: 15,
        topic: "Strict Liability / Assumption of Risk",
        fp: "A mining company that operated a copper mine in a remote location kept dynamite in a storage facility at the mine. The storage facility was designed and operated in conformity with state-of-the-art safety standards. In the jurisdiction, the storage of dynamite is deemed an abnormally dangerous activity.\n\nDynamite that was stored in the mining company's storage facility and that had been manufactured by an explosives manufacturer exploded due to an unknown cause. The explosion injured a state employee who was at the mine performing a safety audit. The employee brought an action in strict liability against the mining company.",
        q: "What would be the mining company's best defense?",
        opts: [
            "The mine was in a remote location.",
            "The mining company did not manufacture the dynamite.",
            "The state employee assumed the risk of injury inherent in the job.",
            "The storage facility conformed to state-of-the-art safety standards."
        ],
        ans: 2,
        exp: "(C) is the best response, because assumption of risk can be a defense to a strict liability action, and the employee here assumed the risk of an accident like the one that occurred.\n\nThe employee knew he was auditing the safety of a mine containing explosives and thus knowingly and willingly assumed the risk of an explosion. Assumption of risk is a valid affirmative defense to strict liability for abnormally dangerous activities.\n\n(A) is not the best response because the facts state that the jurisdiction *already* deems the storage of dynamite to be an abnormally dangerous activity, implicitly meaning the remote location exception does not negate this status. (B) is not the best response because the action is based on the abnormally dangerous *activity* of storing explosives, not strict products liability for manufacturing it. (D) is not the best response because conformity to state-of-the-art safety standards (reasonable care) is not a defense to strict liability."
    },
    {
        id: 16,
        topic: "Proximate Cause / Subsequent Injuries",
        fp: "A driver negligently ran into a pedestrian who was walking along a road. The pedestrian sustained an injury to his knee, causing it to buckle from time to time. Several months later, the pedestrian sustained an injury to his shoulder when his knee buckled, causing him to fall down a flight of stairs. The pedestrian then brought an action against the driver for the injuries to his knee and shoulder.",
        q: "In his action against the driver, for which of his injuries may the pedestrian recover damages?",
        opts: [
            "For the injuries to his knee and shoulder, because the driver takes the victim as he finds him.",
            "For the injuries to his knee and shoulder, if the jury finds that the pedestrian's fall down a flight of stairs was a normal consequence of his original injury.",
            "For the injury to his knee only, because the injury to the pedestrian's shoulder is separable.",
            "For the injury to his knee only, if the jury finds that the driver could not have foreseen that his negligent driving would cause the pedestrian to fall down a flight of stairs."
        ],
        ans: 1,
        exp: "(B) is the best response, because one who negligently causes an initial injury to another is also liable for a second injury to the other that is a normal consequence of the initial injury.\n\nWhen a defendant's negligence causes an initial injury that impairs the plaintiff's physical condition, the defendant is also liable for harm sustained in a subsequent accident if it is a \"normal consequence\" of that impairment. It does not matter if the specific subsequent accident was reasonably foreseeable at the time of the original negligence.\n\n(A) is not the best response because \"takes the victim as he finds him\" refers to pre-existing vulnerabilities (eggshell skull), not subsequent accidents. (C) is not the best response because separability of injuries is relevant to apportioning damages among multiple tortfeasors, not cutting off liability for a single tortfeasor. (D) is not the best response because foreseeability at the exact moment of the initial accident is not required for a subsequent injury that naturally follows from the impaired condition."
    },
    {
        id: 17,
        topic: "Self-Defense / Deadly Force",
        fp: "A rancher and his neighbor were involved in a boundary dispute. In order to resolve their differences, each drove his truck to an open pasture area on his land where the two properties were separated by a fence. The rancher was accompanied by four friends, and the neighbor was alone.\n\nThe neighbor got out of his truck and walked toward the fence. The rancher got out but simply stood by his truck. When the neighbor came over the fence, the rancher shot him, inflicting serious injury.\n\nIn a battery action brought by the neighbor against the rancher, the rancher testified that he actually thought his neighbor was armed, although he could point to nothing that would have reasonably justified this belief.",
        q: "Is the neighbor likely to prevail?",
        opts: [
            "No, because the rancher was standing on his own property and had no obligation to retreat.",
            "No, because the rancher suspected that the neighbor was armed.",
            "Yes, because deadly force is never appropriate in a property dispute.",
            "Yes, because it was unreasonable for the rancher to consider the use of a gun necessary for self-defense."
        ],
        ans: 3,
        exp: "(D) is the best response, because the rancher's belief that the neighbor was armed was unreasonable.\n\nA person may use deadly force in self-defense only if they have a *reasonable* belief that they are threatened with imminent death or serious bodily harm. The rancher testified he \"could point to nothing that would have reasonably justified\" his belief that the neighbor was armed. Without an objectively reasonable belief, the use of deadly force is an unprivileged battery.\n\n(A) is not the best response because the \"no retreat\" rule (stand your ground) does not permit deadly force without a reasonable threat of death or serious bodily harm. (B) is not the best response because a mere subjective suspicion is insufficient; the belief must be reasonable. (C) is not the best response because deadly force *can* be appropriate in a property dispute if the encounter escalates into a reasonable threat of death or serious bodily harm."
    },
    {
        id: 18,
        topic: "Private Necessity",
        fp: "A driver was traveling along a highway during an unusually heavy rainstorm when the roadway began to flood. To protect his car from water damage, the driver pulled his car up a steep, unmarked driveway abutting the highway that led to a homeowner's residence. The driver left his car parked in the driveway and walked home, intending to return when the floodwater had subsided. Shortly after the driver started to walk home, the homeowner carefully rolled the car back down his driveway and parked it on the highway shoulder. The floodwater continued to rise and caused damage to the driver's car.",
        q: "If the driver sues the homeowner to recover for damage to the car, is the driver likely to prevail?",
        opts: [
            "Yes, because the driver was privileged to park his car on the homeowner's property.",
            "Yes, because there were no \"no trespassing\" signs posted.",
            "No, because the driver intentionally drove his car onto the homeowner's property.",
            "No, because the homeowner was privileged to remove the car from his property."
        ],
        ans: 0,
        exp: "(A) is the best response, because the driver had the privilege of private necessity, making the homeowner's removal of the car wrongful.\n\nUnder the doctrine of private necessity, a person is privileged to enter another's land to protect themselves or their property from serious harm. Once the driver properly exercised this privilege, the homeowner was under a duty to allow the car to remain until the danger passed. By rolling the car back down into the floodwaters, the homeowner violated this duty and is liable for the resulting damage to the car.\n\n(B) is not the best response because the absence of \"no trespassing\" signs is irrelevant to the application of private necessity. (C) is not the best response because the intentional nature of the entry is excused by the privilege of necessity. (D) is not the best response because the homeowner is not privileged to expel someone exercising a valid privilege of private necessity."
    },
    {
        id: 19,
        topic: "Premises Liability / Independent Contractors",
        fp: "A hotel employed a carefully selected independent contractor to rebuild its swimming pool. The hotel continued to operate while the pool was being rebuilt. The contract between the hotel and the contractor required the contractor to indemnify the hotel for any liability arising from the contractor's negligent acts. A guest of the hotel fell into the excavation, which the contractor had negligently left unguarded.",
        q: "In an action by the guest against the hotel to recover for his injuries, what would be the most likely outcome?",
        opts: [
            "Liability, because the hotel had a non-delegable duty to the guest to keep a safe premises.",
            "Liability, because the contract between the hotel and the contractor required the contractor to indemnify the hotel for any liability arising from the contractor's negligent acts.",
            "No liability, because the contractor was the actively negligent party.",
            "No liability, because the hotel exercised reasonable care in employing the contractor."
        ],
        ans: 0,
        exp: "(A) is the best response, because a possessor of land open to the public owes the public a duty to keep the premises reasonably safe, and this duty may not be delegated to an independent contractor.\n\nWhile a principal is generally not vicariously liable for the torts of an independent contractor, there are exceptions. One major exception is the non-delegable duty a business possessor of land owes to its invitees to maintain safe premises. Because the hotel remained open during renovations, it could not delegate its duty to keep the premises safe for its guests. The hotel is vicariously liable for the contractor's negligence.\n\n(B) is not the best response because an indemnification contract between the hotel and the contractor only allows the hotel to recover from the contractor later; it is not the *source* of the hotel's liability to the guest. (C) is not the best response because the non-delegable duty exception holds the principal liable regardless of active/passive negligence. (D) is not the best response because exercising reasonable care in hiring the contractor does not shield the hotel from its non-delegable duty to invitees."
    },
    {
        id: 20,
        topic: "Defamation / Actual Malice",
        fp: "A newspaper published an editorial in which an editor asserted that a candidate for high political office was a user of illegal drugs. The accusation was untrue. The editor acted unreasonably in not investigating the accusation before publishing it; however, the editor honestly believed that the accusation was true.\n\nThe candidate sued the editor for defamation.",
        q: "Is the candidate entitled to recover?",
        opts: [
            "No, because the accusation appeared in an editorial and was, therefore, merely an opinion.",
            "No, because the editor honestly believed that the accusation was true.",
            "Yes, because calling someone an illegal drug user is defamatory per se.",
            "Yes, because the accusation was false and was injurious to the candidate's reputation."
        ],
        ans: 1,
        exp: "(B) is the best response, because the plaintiff was required to show that the defendant either knew the statement was false or had serious doubts about whether it was true.\n\nA candidate for high political office is a public figure. Under New York Times v. Sullivan, a public figure must prove \"actual malice\" to recover for defamation—meaning the defendant acted with knowledge that the statement was false or with reckless disregard for its truth. Reckless disregard requires that the defendant *actually entertained serious doubts* as to the truth of the publication. Because the editor honestly believed the accusation was true, he did not act with actual malice, even if he acted unreasonably by failing to investigate.\n\n(A) is not the best response because stating as a fact that someone uses illegal drugs is a provable statement of fact, regardless of its placement in an editorial. (C) and (D) are not the best responses because they ignore the constitutional requirement of actual malice for public figures."
    },
    {
        id: 21,
        topic: "Joint and Several Liability / Comparative Fault",
        fp: "An elderly neighbor hired a 17-year-old boy with a reputation for reckless driving to drive the neighbor on errands once a week. One day the teenager, driving the neighbor's car, took the neighbor to the grocery store. While the neighbor was in the store, the teenager drove out of the parking lot and headed for a party on the other side of town.\n\nWhile on his way to the party, the teenager negligently turned in front of a moving car and caused a collision. The other driver was injured in the collision.\n\nThe injured driver has brought an action for damages against the neighbor, based on negligent entrustment, and against the teenager.\n\nThe jury has found that the injured driver's damages were $100,000, that the injured driver was 10 percent at fault, that the teenager was 60 percent at fault, and that the neighbor was 30 percent at fault for entrusting his car to the teenager.",
        q: "Based on these damage and responsibility amounts, what is the maximum that the injured driver could recover from the neighbor?",
        opts: [
            "$100,000.",
            "$90,000.",
            "$60,000.",
            "$30,000."
        ],
        ans: 1,
        exp: "(B) is the best response, because the neighbor can be held responsible for all damage other than that attributable to the plaintiff.\n\nUnder pure comparative negligence with joint and several liability (the default MBE rules unless otherwise stated), the plaintiff's recovery is reduced by their percentage of fault (10% of $100,000 = $10,000 reduction). The total recoverable damages are $90,000. Because the neighbor's negligent entrustment and the teenager's negligent driving combined to cause an indivisible injury, they are jointly and severally liable. Therefore, the injured driver can recover the full $90,000 from the neighbor (who may then seek contribution from the teenager).\n\n(A) is not the best response because it fails to deduct the plaintiff's share of the fault. (C) and (D) are not the best responses because they fail to apply joint and several liability, which allows the plaintiff to recover the entire judgment (minus plaintiff's fault) from any liable defendant."
    },
    {
        id: 22,
        topic: "Res Ipsa Loquitur / Multiple Defendants",
        fp: "A patient received anesthesia while giving birth. Upon awakening from the anesthesia, she discovered a severe burn on the inner portion of her right knee. The patient has brought a medical malpractice action in which she has joined all of the physicians and nurses who exercised control over her person, the delivery room, the medical procedures, and the equipment used during the period in which she was unconscious.\n\nThe defendants have jointly moved for summary judgment. The patient has produced affidavits that establish that the applicable professional standard of care was violated.",
        q: "What would be the patient's best argument against the motion?",
        opts: [
            "At least one of the defendants had control over whatever agency or instrumentality caused the patient's injury.",
            "The defendants were acting in concert.",
            "The patient has produced affidavits that establish that the applicable professional standard of care was violated.",
            "The patient was in no way responsible for her injury."
        ],
        ans: 0,
        exp: "(A) is the best response, because res ipsa loquitur would apply, and the court would be likely to shift onto the defendants the burden of coming forward with some evidence about which defendant(s) behaved negligently.\n\nThis fact pattern mirrors the famous case *Ybarra v. Spangard*. Normally, res ipsa loquitur requires showing exclusive control by a *single* defendant. However, when an unconscious medical patient suffers an unexplained injury outside the scope of the procedure, courts relax the exclusive control requirement and shift the burden to all medical personnel who had control over the patient or instrumentalities during the procedure to exculpate themselves. Arguing that the responsible party is among the joined defendants who had control is the best argument to defeat summary judgment.\n\n(B) is not the best response because there is no evidence the defendants were \"acting in concert\" (which means jointly agreeing or cooperating to commit a tort). (C) and (D) establish elements of res ipsa loquitur (that negligence occurred and the plaintiff did not cause it), but fail to address the critical issue of multiple defendants, which (A) resolves."
    },
    {
        id: 23,
        topic: "Conversion",
        fp: "A customer pledged a stock certificate to a bank as security for a loan. A year later, when the customer fully repaid the loan, the bank refused the customer's demand to return the stock certificate because the officer dealing with the loan had the mistaken belief that there was still a balance due. No one at the bank reviewed the records until two months later, at which time the error was discovered. The bank then offered to return the stock certificate. However, the customer refused to accept it.\n\nAt the time the customer pledged the certificate, the shares were worth $10,000; at the time the customer repaid the loan, the shares were worth $20,000; and at the time the bank offered to return the certificate, the shares were worth $5,000.",
        q: "If the customer brings an action against the bank based on conversion, how much, if anything, should the customer recover?",
        opts: [
            "Nothing, because the bank lawfully came into possession of the certificate.",
            "$5,000, because that was the value of the shares when the customer refused to accept the certificate back.",
            "$10,000, because that was the value of the shares when the bank came into possession of the certificate.",
            "$20,000, because that was the value of the shares when the customer was entitled to the return of the certificate."
        ],
        ans: 3,
        exp: "(D) is the best response, because the conversion occurred at the time the bank wrongfully refused to return the certificate.\n\nConversion is an intentional exercise of dominion or control over a chattel that so seriously interferes with another's right to control it that the actor may justly be required to pay the full value of the chattel. While the bank's initial possession was lawful, its refusal to return the certificate upon repayment constituted conversion. The measure of damages for conversion is the fair market value of the chattel at the time and place of the conversion. When the customer repaid the loan and demanded the return of the stock, the value was $20,000.\n\n(A) is not the best response because a lawful initial possession does not preclude a subsequent conversion upon wrongful refusal to return. (B) evaluates damages at the wrong time (after the conversion). (C) evaluates damages at the time of the initial lawful pledge, before any tort occurred."
    },
    {
        id: 24,
        topic: "Negligence / Foreseeability",
        fp: "A man rented a car from a car rental agency. Unbeknownst to the rental agency, the car had a bomb hidden in it at the time of the rental. The bomb exploded an hour later, injuring the man.\n\nImmediately prior to renting the car to the man, the rental agency had carefully inspected the car to be sure it was in sound operating condition. The rental agency did not inspect for hidden explosive devices, but such an inspection for explosives would have revealed the bomb.\n\nThere had been no previous incidents of persons hiding bombs in rental cars.",
        q: "In a negligence action by the man against the car rental agency, is the man likely to prevail?",
        opts: [
            "No, because the rental agency could not have reasonably foreseen the likelihood of someone placing a bomb in the car it was about to rent to the man.",
            "No, because the rental agency did not hide the bomb in the car.",
            "Yes, because an inspection for explosive devices would have revealed the bomb.",
            "Yes, because the bomb made the car abnormally dangerous."
        ],
        ans: 0,
        exp: "(A) is the best response, because the rental agency could only be liable for harm proximately caused by its negligence, and failing to check for a bomb whose presence was not reasonably foreseeable was not negligent.\n\nIn a negligence action, a defendant must fail to exercise reasonable care under the circumstances. A rental agency has a duty to reasonably inspect cars for mechanical defects. However, because there were no prior incidents of hidden bombs, a bomb was not a reasonably foreseeable risk. Therefore, the failure to specifically inspect for explosive devices did not breach the duty of reasonable care.\n\n(B) is not the best response because the agency could be liable for failing to discover a danger created by a third party, *if* doing so was part of a reasonable inspection (e.g., if bomb threats were common). (C) is not the best response because the fact that an inspection *would* have revealed the bomb does not mean the agency had a *duty* to conduct such an inspection for an unforeseeable risk. (D) is not the best response because renting cars is not an abnormally dangerous activity that triggers strict liability."
    },
    {
        id: 25,
        topic: "Negligence / Causation",
        fp: "In an action by a man against a pharmacy, the man offered only the following evidence:\n\nThe man took a clearly written prescription to a pharmacy. The pharmacy's employee filled the prescription by providing pills with 30 milligrams of the active ingredient instead of 20 milligrams, as was prescribed. Shortly after taking the pills as directed, the man, who had no previous history of heart problems, suffered a heart attack. Overdoses of the active ingredient had previously been associated with heart problems.",
        q: "Does the man have a valid claim against the pharmacy?",
        opts: [
            "No, because pharmacies are not strictly liable for injuries caused by incorrectly filled prescriptions.",
            "No, because the man offered no specific proof as to the pharmacy's negligence.",
            "Yes, because a jury could reasonably conclude that the man would not have suffered a heart attack had the pharmacy provided the correct dosage.",
            "Yes, because by providing the 30-milligram pills rather than the 20-milligram pills, the pharmacy sold the man a defective product."
        ],
        ans: 2,
        exp: "(C) is the best response, because it is the only response that establishes how the plaintiff would satisfy his burden of proving that the pharmacy's error was the cause-in-fact of his heart attack.\n\nTo succeed in a negligence claim, the plaintiff must show duty, breach, causation, and damages. Providing the wrong dosage establishes breach of the standard of care. Because the man had no history of heart problems and the drug overdose is known to cause heart problems, a jury could reasonably infer \"but-for\" causation—that the overdose caused the heart attack.\n\n(A) is not the best response because the claim can be successfully brought as a negligence claim, rendering strict liability irrelevant. (B) is not the best response because providing the wrong dosage is specific proof of a breach of the professional standard of care. (D) is not the best response because the action is more appropriately rooted in professional negligence (malpractice) rather than strict products liability for a \"defective\" pill (the pill itself wasn't defective; the service of dispensing the wrong pill was negligent)."
    }
];