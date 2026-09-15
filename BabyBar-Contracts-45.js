// BabyBar-Contracts-45.js
// Total Questions: 25
// Subject: Contracts (Common Law & UCC Article 2)
// Standard: Master Tier 5 / First-Year Law Students' Examination (Baby Bar) Benchmark
const examData = [
    {
        id: 1,
        topic: "Formation / UCC 2-205 Firm Offer Requirements",
        fp: "A manufacturer of commercial kitchen stoves sent an unsigned brochure to a restaurant owner. The brochure described a 6-burner commercial range for $3,000 and had a stamped postscript on the front that read: 'Special Promotion: Price guaranteed held open for 60 days from May 1.' The manufacturer's corporate logo and address were printed at the top of the brochure. On May 20, wholesale steel costs escalated, and the manufacturer sent an email to the restaurant owner stating that all promotional prices were withdrawn. The restaurant owner replied on May 21 with a written purchase order for two ranges at $3,000 each. The manufacturer refused to fill the order at that price.",
        q: "Did the manufacturer effectively revoke its offer prior to acceptance?",
        opts: [
            "No, because the brochure constituted an irrevocable firm offer under UCC § 2-205.",
            "Yes, because the promotional brochure was not an offer signed by the manufacturer.",
            "No, because promotional advertisements between merchants remain open for a reasonable time.",
            "Yes, because firm offers under the UCC cannot remain open for more than 30 days."
        ],
        ans: 1,
        exp: "(B) is the best response, because UCC § 2-205 strictly requires a signed writing by the merchant. Under UCC § 2-205, an offer by a merchant to buy or sell goods in a signed writing which by its terms gives assurance that it will be held open is not revocable for lack of consideration. While an intent to authenticate under UCC § 1-201(b)(37) can sometimes be satisfied by pre-printed letterhead, a mass-distributed unsigned promotional advertising circular is generally treated as an invitation to deal rather than a firm offer. Even if construed as an offer, the absence of an intentional signature or manual execution authenticating the firm assurance term prevents the creation of an irrevocable firm offer. Thus, the manufacturer retained the power to revoke at will prior to acceptance. (A) is incorrect because an unsigned promotional flyer does not satisfy the firm offer requirements of UCC § 2-205. (C) is incorrect because price circulars and advertisements are presumed to be preliminary invitations to deal rather than firm offers. (D) is incorrect because the statutory cap for firm offers under UCC § 2-205 is three months, not 30 days."
    },
    {
        id: 2,
        topic: "Consideration / Pre-Existing Duty & Past Consideration",
        fp: "An uncle wrote to his adult nephew: 'In consideration of your graduating from college at the top of your class last June, and your continued promise to never drink alcohol until you reach age 25, I promise to pay you $10,000 on your 25th birthday.' The nephew, who had in fact graduated at the top of his class the previous June and was currently 22 years old, wrote back: 'I accept your offer and promise I will not touch a drop of alcohol until I turn 25.' The legal drinking age in the jurisdiction was 21. When the nephew reached age 25, having completely abstained from alcohol, the uncle refused to pay.",
        q: "Is the uncle legally bound to pay the nephew the $10,000?",
        opts: [
            "No, because graduating from college at the top of the class was past consideration.",
            "Yes, because refraining from drinking alcohol when legally entitled to do so constitutes valid consideration.",
            "No, because agreements within family members regarding personal morality are presumed gratuitous.",
            "Yes, under the material benefit rule because the nephew's academic honors brought prestige to the family."
        ],
        ans: 1,
        exp: "(B) is the best response, because the nephew's forbearance of a legal right constituted valid consideration under Hamer v. Sidway and Restatement (Second) of Contracts § 71. While past services or past accomplishments (such as graduating college last June) cannot serve as consideration, a promise supported in part by past consideration and in part by valid executory consideration is fully enforceable if the bargained-for legal detriment is present. The nephew was over 21 and had a legal right to consume alcohol. Forbearing from doing something that one has a legal right to do at the promisor's request constitutes a legal detriment that satisfies the consideration requirement. (A) is incorrect because the presence of past consideration does not invalidate an agreement where independent, valid legal detriment (refraining from drinking) was bargained for. (C) is incorrect because the common law enforces bargained-for family promises supported by legal detriment. (D) is incorrect because the material benefit rule applies to emergency life-saving or property-saving benefits, not general family pride."
    },
    {
        id: 3,
        topic: "Formation / UCC 2-207 Conditional Acceptance",
        fp: "A machine shop mailed a purchase order to a steel supplier for 500 alloy steel rods at $100 per rod. The purchase order was silent regarding choice of law and venue. The supplier sent an acknowledgment form stating: 'We accept your order on the express condition that you agree to litigate all disputes arising hereunder exclusively in the state courts of Ohio.' The machine shop received the form, did not read the clause, and did not reply. Three days later, the supplier delivered 500 conforming alloy rods, which the machine shop accepted and paid for. A dispute later arose over latent metallurgical defects, and the machine shop filed suit in Pennsylvania. The supplier moved to dismiss based on the forum selection clause.",
        q: "Is the machine shop bound by the forum selection clause?",
        opts: [
            "Yes, because between merchants, additional procedural terms automatically become part of the contract.",
            "No, because the supplier's acceptance was expressly made conditional on assent, and the resulting contract formed by conduct does not include the unagreed term.",
            "Yes, because accepting and paying for the shipment operated as an express assent to all terms on the supplier's form.",
            "No, because forum selection clauses are void per se under UCC § 2-207."
        ],
        ans: 1,
        exp: "(B) is the best response, because under UCC § 2-207(1), a conditional acceptance does not form a contract on the writings, and the contract formed by conduct under § 2-207(3) excludes unagreed terms. Under UCC § 2-207(1), a response that is expressly made conditional on assent to additional or different terms operates as a counteroffer rather than an acceptance. Because the machine shop never expressly assented to the Ohio forum clause, no contract was formed on the exchange of forms. However, when the supplier shipped and the buyer accepted the goods, their conduct recognized the existence of a contract under UCC § 2-207(3). Under § 2-207(3), the terms of such a contract consist of those terms on which the writings agree, together with any supplementary terms incorporated under any other provisions of the UCC. Because the writings did not agree on forum selection and the UCC provides no gap-filler for venue, the clause drops out entirely. (A) is incorrect because additional terms do not enter automatically when the acceptance is expressly conditional. (C) is incorrect because taking delivery under § 2-207(3) forms a contract by conduct; it does not adopt the counteroffer's terms. (D) is incorrect because forum selection clauses are generally valid if mutually agreed upon."
    },
    {
        id: 4,
        topic: "Parol Evidence / Consistent Additional Terms in Partial Integration",
        fp: "A developer and a landscape contractor signed a two-page written agreement under which the contractor agreed to plant 50 shade trees in a new residential subdivision for $25,000. The writing specified the tree species, location, price, and warranty, but did not contain a merger clause and did not specify who was responsible for providing the topsoil and mulch for the tree pits. Prior to signing, the parties orally agreed that the developer would provide all necessary mulch and topsoil from an existing stockpile on the property. When the contractor arrived to plant the trees, the developer refused to supply the mulch and topsoil, demanding that the contractor supply them at his own expense. In a breach of contract action, the developer objected to the admission of the prior oral agreement.",
        q: "Is the oral agreement regarding the mulch and topsoil admissible?",
        opts: [
            "No, because the written contract set forth all the essential obligations of the parties.",
            "Yes, because the writing is partially integrated and the oral term is a consistent additional term.",
            "No, because extrinsic evidence is inadmissible to add duties to a written service contract.",
            "Yes, but only if the contractor proves the agreement by clear and convincing evidence."
        ],
        ans: 1,
        exp: "(B) is the best response, because under Restatement (Second) of Contracts § 216, consistent additional terms are admissible to supplement a partially integrated agreement. Where a writing is a final expression of the terms it includes, but is not completely integrated (i.e., not a complete and exclusive statement of the entire agreement), the Parol Evidence Rule bars evidence of prior agreements that contradict the writing, but permits evidence of consistent additional terms. The contract lacked a merger clause and was silent as to the provision of mulch and soil. The prior oral agreement that the developer would supply these materials from an on-site stockpile supplements the writing without contradicting any express term. (A) is incorrect because omission of a term in a partial integration allows consistent extrinsic supplementation. (C) is incorrect because the Parol Evidence Rule allows consistent additions to partially integrated contracts. (D) is incorrect because admissibility under the Parol Evidence Rule is governed by a preponderance of the evidence standard, not clear and convincing evidence."
    },
    {
        id: 5,
        topic: "Defenses / Mutual Mistake vs Assumption of Risk",
        fp: "A farmer contracted to sell a pregnant prize dairy cow to a livestock breeder for $8,000. Both the farmer and the breeder believed that the cow was carrying a single calf from an ordinary bull. Unknown to either party, an accidental breeding had occurred three months earlier with an escaped, world-champion purebred bull whose semen was worth thousands of dollars. Two weeks after delivery, the cow gave birth to twin purebred bull calves having an aggregate fair market value of $60,000. The farmer sued to rescind the sales contract based on mutual mistake.",
        q: "Can the farmer successfully rescind the contract on the ground of mutual mistake?",
        opts: [
            "Yes, because both parties were mistaken about a basic assumption that materially affected the agreed exchange.",
            "No, because the contract was for the sale of the cow, and the fertility and genetic pedigree of unborn calves was a business risk assumed by the seller.",
            "Yes, because the buyer would be unjustly enriched by retaining calves worth $60,000.",
            "No, because the UCC abolishes mutual mistake in livestock transactions."
        ],
        ans: 1,
        exp: "(B) is the best response, because the seller bore the risk of the mistake regarding the value and breeding status of the livestock under Restatement (Second) of Contracts § 154. Under Restatement § 152, mutual mistake makes a contract voidable only if the adversely affected party did not bear the risk of the mistake. A party bears the risk of mistake when the risk is allocated to him by agreement, by conscious ignorance, or by the court on the ground that it is reasonable under the circumstances. In agricultural livestock sales, the owner/farmer is in the best position to control and verify the breeding environment of his animals. Unlike the classic barren cow case (Sherwood v. Walker), where both parties believed the cow was completely sterile and worthless for breeding, here both parties knew the cow was pregnant and fertile. A mistake solely as to the quality or genetic value of the offspring is a collateral mistake of valuation, the risk of which is assumed by the seller. (A) is incorrect because mistake of value/attributes does not excuse a contract where the risk is properly allocated to the seller. (C) is incorrect because unjust enrichment does not override a valid contract allocation of risk. (D) is incorrect because UCC § 1-103 preserves common law mistake."
    },
    {
        id: 6,
        topic: "Performance / Substantial Performance & Economic Waste",
        fp: "A commercial builder contracted to construct a single-story brick warehouse for $300,000. The specifications required the installation of 'Reading Brand Schedule-40 cast-iron drainpipes.' The builder completed the structure in full compliance with all architectural plans and municipal building codes. However, the builder installed 'Cohoes Brand Schedule-40 cast-iron drainpipes.' Uncontradicted expert testimony established that Cohoes pipe was identical in grade, thickness, durability, and market value to Reading pipe, and that the market value of the building was unaffected ($400,000). To remove the Cohoes pipe would require demolishing interior masonry walls at a cost of $50,000. The owner refused to make the final payment of $40,000, demanding that the builder replace the pipe.",
        q: "What amount is the builder entitled to recover from the owner?",
        opts: [
            "Nothing, because the builder's failure to install Reading pipe was a breach of an express condition.",
            "$40,000, because the builder substantially performed and the diminution in value is zero.",
            "The reasonable value of the installed pipe in quantum meruit, not to exceed $10,000.",
            "$40,000 offset by the $50,000 cost of replacement, resulting in a $10,000 judgment for the owner."
        ],
        ans: 1,
        exp: "(B) is the best response, because the builder substantially performed, and the cost of replacement would involve unreasonable economic waste under Jacob & Youngs v. Kent and Restatement (Second) of Contracts § 348(2). In construction contracts, where a breach is unintentional and trivial, does not impair the structural integrity or utility of the building, and the cost of completion or replacement is grossly disproportionate to the benefit to be obtained, damages are measured by the diminution in market value rather than the cost of repair. Demolishing masonry walls at an expense of $50,000 to replace identical cast-iron pipe where the market value difference is $0 constitutes gross economic waste. The owner is entitled to zero offset, and the builder is entitled to the full unpaid contract balance of $40,000. (A) is incorrect because material specifications are construed as covenants rather than conditions of forfeiture. (C) is incorrect because a contractor who substantially performs recovers on the contract, not in quantum meruit. (D) is incorrect because cost-of-replacement damages are denied when they produce unreasonable economic waste."
    },
    {
        id: 7,
        topic: "Breach / Anticipatory Repudiation Demand for Assurances",
        fp: "A wheat broker contracted in writing to deliver 10,000 bushels of milling wheat to a flour mill on November 1 at $6.00 per bushel. On September 15, the price of wheat rose to $9.00 per bushel. The mill president called the broker and asked: 'Are you still planning to deliver the wheat at $6.00?' The broker replied: 'In light of this crazy market, it seems completely unfair that I should have to take a $30,000 loss on our deal.' The mill president immediately treated the statement as a total breach, purchased 10,000 bushels on the open market for $9.00 per bushel, and sued the broker for $30,000 in cover damages on September 20.",
        q: "Did the broker's statement constitute an anticipatory repudiation?",
        opts: [
            "Yes, because the broker indicated that performing at the contract price was unfair.",
            "No, because the broker's statement was an expression of doubt or dissatisfaction rather than a clear, unequivocal refusal to perform.",
            "Yes, because any ambiguous statement made in response to an inquiry regarding performance constitutes a repudiation.",
            "No, because an anticipatory repudiation can only be made in a signed writing under UCC Article 2."
        ],
        ans: 1,
        exp: "(B) is the best response, because an anticipatory repudiation requires a clear, positive, and unequivocal manifestation of an intention not to perform under Restatement (Second) of Contracts § 250 and UCC § 2-610. A mere expression of doubt, a complaint about market conditions, or a statement that performance would be burdensome or unfair does not constitute an anticipatory repudiation. The broker stating that the deal 'seems completely unfair' was an expression of dissatisfaction, not a definitive statement that he would not perform. In this situation, the mill's proper remedy under UCC § 2-609 was to demand in writing adequate assurance of due performance; until such assurance was demanded and refused, the mill had no legal right to treat the contract as broken and cover. (A) is incorrect because complaining of unfairness does not meet the standard of an unequivocal repudiation. (C) is incorrect because ambiguous statements do not constitute repudiations; they merely provide grounds to demand adequate assurance. (D) is incorrect because an anticipatory repudiation may be made orally."
    },
    {
        id: 8,
        topic: "Remedies / Lost Volume Seller Overhead Deduction",
        fp: "A retail boat dealer entered into a written contract to sell a new factory-standard speedboat to a customer for $50,000. The wholesale cost of the boat from the manufacturer was $40,000. The customer unjustifiably repudiated the contract prior to delivery. The dealer resold the exact same boat to another buyer for $50,000. The dealer had an unlimited supply of boats from the manufacturer and could have made both sales. In a suit against the customer for lost profits under UCC § 2-708(2), the customer argued that the dealer's $10,000 gross margin must be reduced by the dealer's allocated fixed overhead costs (rent, utilities, executive salaries) of $3,000, limiting recovery to $7,000.",
        q: "What amount of lost profit is the dealer entitled to recover?",
        opts: [
            "Nothing, because the dealer resold the boat for the contract price.",
            "$10,000, because under UCC § 2-708(2), a lost volume seller recovers profit including reasonable overhead without deduction for fixed expenses.",
            "$7,000, representing net operating profit after deducting allocated overhead.",
            "$50,000, representing the entire contract price of the boat."
        ],
        ans: 1,
        exp: "(B) is the best response, because UCC § 2-708(2) explicitly provides that lost profits include reasonable overhead without deduction for fixed business expenses. Under UCC § 2-708(2), the measure of damages for a lost volume seller is 'the profit (including reasonable overhead) which the seller would have made from full performance by the buyer'. Fixed overhead expenses (such as rent, administrative salaries, and property taxes) are incurred by the merchant regardless of whether an individual contract is breached or performed; allocating fixed costs as a deduction against the gross margin would under-compensate the seller. Therefore, the dealer recovers the full gross profit margin of $10,000 ($50,000 contract price minus $40,000 direct wholesale cost) without deduction for the $3,000 allocated overhead. (A) is incorrect because a lost volume seller loses the opportunity to make an additional sale. (C) is incorrect because UCC § 2-708(2) expressly bars the deduction of fixed overhead. (D) is incorrect because an action for the price under UCC § 2-709 does not apply when the seller retains the goods and can resell them."
    },
    {
        id: 9,
        topic: "Third Parties / Vesting of Donee Beneficiary Rights",
        fp: "An uncle entered into a written agreement with a builder to construct a residential swimming pool in the backyard of the uncle's daughter for $30,000, payable upon completion. The contract explicitly provided that the pool was intended as a birthday gift for the daughter. The builder began excavation on June 1. On June 5, the daughter learned of the contract, visited the builder at the site, and said: 'I am so excited about the pool; thank you for doing this for my birthday.' On June 10, the uncle had an argument with his daughter and signed a mutual agreement with the builder rescinding the pool contract. The builder packed up his equipment and left. The daughter sued the builder to compel performance.",
        q: "Can the daughter enforce the pool construction contract?",
        opts: [
            "No, because the original contracting parties retain the absolute power to modify or rescind their agreement at any time prior to completion.",
            "Yes, because the daughter's rights as an intended third-party beneficiary vested when she manifested assent to the contract.",
            "No, because the daughter gave no consideration to either the uncle or the builder.",
            "Yes, but only if the daughter detrimentally changed her position in reliance on the gift."
        ],
        ans: 1,
        exp: "(B) is the best response, because the daughter's rights as an intended third-party beneficiary vested upon her manifestation of assent under Restatement (Second) of Contracts § 311(3). Under Restatement § 311, the power of the promisor and promisee to modify or discharge a duty to an intended beneficiary terminates when the beneficiary: (1) materially changes position in justifiable reliance; (2) brings suit on the promise; or (3) manifests assent to it at the request of the promisor or promisee. The daughter was an intended donee beneficiary named in the contract. Her personal visit to the job site manifesting joy and assent to the builder before the attempted rescission vested her rights. Once vested, the contract cannot be modified or rescinded without her consent. (A) is incorrect because the power of the original parties to rescind terminates upon vesting. (C) is incorrect because third-party beneficiaries need not supply consideration to enforce the contract. (D) is incorrect because manifestation of assent is an independent alternative ground for vesting under Restatement § 311(3); detrimental reliance is not strictly required."
    },
    {
        id: 10,
        topic: "Assignment & Delegation / Novation vs Delegation",
        fp: "A master tailor entered into a written contract with an opera company to design and hand-sew ten elaborate period costumes for an upcoming opera production for $20,000, completion due September 1. In July, the tailor was offered a lucrative film studio job. The tailor contacted the opera company director and proposed that an equally skilled, licensed master theatrical seamstress take over the costume contract. The opera company director agreed, and the tailor, the seamstress, and the opera company signed a three-party writing stating: 'Seamstress agrees to assume all costume design and sewing duties under the July contract, Opera Company agrees to pay Seamstress the $20,000 fee, and Tailor is hereby released from all further obligations.' The seamstress delivered defective costumes late, forcing the opera company to cancel the performance. The opera company sued the original tailor for breach.",
        q: "Is the original tailor liable to the opera company for the breach?",
        opts: [
            "Yes, because a delegating obligor remains secondarily liable as a surety unless supported by fresh consideration.",
            "No, because the three-party agreement constituted a novation that completely discharged the tailor from all liability.",
            "Yes, because contracts involving personal artistic skills cannot be delegated under common law.",
            "No, because an assignee takes subject to all defenses existing against the assignor."
        ],
        ans: 1,
        exp: "(B) is the best response, because the three-party agreement was a valid novation under Restatement (Second) of Contracts § 280. A novation is a substituted contract that includes as a party one who was neither the obligor nor the obligee of the original duty. A novation requires: (1) a previous valid obligation; (2) an agreement of all parties to a new contract; (3) the extinguishment of the old contractual obligation; and (4) the validity of the new contract. Unlike a simple delegation (where the delegating party remains liable as a surety under Restatement § 318(3)), the signed three-party agreement explicitly released the tailor from all obligations and substituted the seamstress. This express release discharged the tailor from all primary and secondary liability. (A) is incorrect because mutual agreement of all three parties to substitute an obligor and release the original party supplies valid consideration. (C) is incorrect because while personal service duties cannot be unilaterally delegated, they can be transferred with the obligee's consent via novation. (D) is incorrect because the issue involves a novation of duties, not an assignment of claims."
    },
    {
        id: 11,
        topic: "Terms / Parol Evidence Rule and Subsequent Modifications",
        fp: "An excavation company entered into a written contract with a developer to clear and grade a building parcel for $50,000, completion due August 1. The contract contained a comprehensive merger clause stating: 'This writing contains the complete and final expression of the agreement between the parties.' On July 10, the developer telephoned the excavation company and orally agreed to expand the work to include clearing a drainage ditch on the adjacent property for an extra $5,000. The company cleared the parcel and the ditch. The developer paid $50,000, but refused to pay the $5,000 for the ditch, arguing that the Parol Evidence Rule barred evidence of the July 10 oral agreement because of the written contract's merger clause.",
        q: "Does the Parol Evidence Rule bar evidence of the July 10 oral agreement?",
        opts: [
            "Yes, because the contract contained an express merger clause establishing a complete integration.",
            "No, because the Parol Evidence Rule applies only to prior or contemporaneous negotiations, not to subsequent modifications.",
            "Yes, because oral modifications of real property service contracts violate the Statute of Frauds.",
            "No, because merger clauses are void as against public policy in construction contracts."
        ],
        ans: 1,
        exp: "(B) is the best response, because the Parol Evidence Rule has no application to agreements made subsequent to the execution of a written contract under Restatement (Second) of Contracts § 213. The Parol Evidence Rule bars evidence of prior oral or written agreements or contemporaneous oral agreements that contradict or supplement a written integration. It does not bar evidence of SUBSEQUENT oral agreements or modifications made after the contract was signed. The oral agreement to clear the drainage ditch for an additional $5,000 occurred on July 10, well after the execution of the original written contract. Therefore, the Parol Evidence Rule does not apply, and evidence of the oral modification is fully admissible. (A) is incorrect because a merger clause integrates only terms existing at or prior to execution; it cannot freeze future modifications. (C) is incorrect because grading services performable within one year are not within the Statute of Frauds. (D) is incorrect because merger clauses are standard and fully enforceable."
    },
    {
        id: 12,
        topic: "Performance / Divisible Contracts (Proportionate Payments)",
        fp: "A timber logging company entered into a written contract with a sawmill to fell, limb, and deliver 100 truckloads of pine logs from a forest tract. The contract provided: 'Sawmill shall pay Logger $1,000 per truckload upon delivery and inspection of each load at the mill.' The logger delivered 30 truckloads of conforming logs, for which the sawmill paid $30,000. The logger delivered another 20 truckloads of conforming logs, which the sawmill inspected and accepted. Before delivering the remaining 50 truckloads, the logger's logging equipment was repossessed by a bank, and the logger abandoned the job. The sawmill refused to pay the $20,000 due for the 20 delivered loads, arguing that the logger's abandonment was a total material breach of the entire 100-load contract.",
        q: "Is the logger entitled to recover the $20,000 for the 20 delivered truckloads?",
        opts: [
            "No, because a party in willful material breach cannot enforce an executory contract.",
            "Yes, because the contract is divisible, entitling the logger to the contract price for severable units fully delivered and accepted.",
            "No, because installment deliveries under common law require 100% completion before any payment duty arises.",
            "Yes, but only in quantum meruit, capped at the logger's out-of-pocket fuel costs."
        ],
        ans: 1,
        exp: "(B) is the best response, because the contract is divisible under Restatement (Second) of Contracts § 240, entitling the performing party to the contract price for completed divisible units. Under Restatement § 240, a contract is divisible if the performances can be apportioned into corresponding pairs of part performances that are agreed equivalents. In a divisible contract, full performance of an individual divisible segment entitles the performing party to the agreed contract compensation for that segment, even if he subsequently breaches remaining executory segments. The contract explicitly apportioned delivery and payment into matching units of $1,000 per truckload. Because the logger fully delivered 20 loads that were inspected and accepted, the logger is entitled to the $20,000 contract price, subject to the sawmill's right to offset any damages caused by the failure to deliver the final 50 loads. (A) is incorrect because divisibility protects accrued compensation from forfeiture. (C) is incorrect because the parties specifically agreed to per-load payment. (D) is incorrect because the logger recovers on the contract itself, not in quantum meruit."
    },
    {
        id: 13,
        topic: "Remedies / Restitution for Non-Breaching Party (Disaffirmance)",
        fp: "A homeowner contracted with a swimming pool builder to construct an inground gunite pool for $40,000. The homeowner paid an advance deposit of $15,000. The builder dug the hole, formed the steel rebar cage, and installed the plumbing rough-ins. The reasonable market value of the labor and materials furnished by the builder at that point was $12,000. At that point, the builder unjustifiably walked off the job and refused to proceed. The homeowner hired another contractor to complete the pool for $30,000. The homeowner sued the original builder, seeking restitution of the $15,000 advance deposit.",
        q: "What amount is the homeowner entitled to recover from the builder in restitution?",
        opts: [
            "$15,000, without any deduction for the partial work performed by the breaching builder.",
            "$3,000, representing the $15,000 deposit minus the $12,000 value of the benefit conferred on the homeowner.",
            "$5,000, representing expectation damages measured by the cost of completion.",
            "Nothing, because the value of the work performed ($12,000) exceeded the remaining unpaid deposit."
        ],
        ans: 1,
        exp: "(B) is the best response, because in restitution, the non-breaching party's recovery is offset by the value of any benefit retained under Restatement (Second) of Contracts § 374 and § 384. Restitution aims to restore to the plaintiff any benefit conferred on the defendant and prevent unjust enrichment. When an injured owner elects restitution rather than expectation damages, the owner is entitled to the return of money paid ($15,000 deposit) MINUS the reasonable market value of the work and materials furnished by the builder that the owner retains ($12,000 benefit conferred). The net restitutionary recovery is $3,000. (Note: The homeowner could alternatively have sued for expectation damages of $5,000—computed as $45,000 total spent minus the $40,000 contract price—but the question specifically asks for the recovery in restitution). (A) is incorrect because restitution requires mutual return of benefits to prevent the owner from enjoying a windfall of free construction. (C) is incorrect because it states the expectation damages figure, not restitution. (D) is incorrect because the deposit ($15,000) exceeded the benefit conferred ($12,000), leaving a $3,000 net balance."
    },
    {
        id: 14,
        topic: "Formation / Option Contract Rejection & Revocation Rules",
        fp: "On March 1, a landowner signed and delivered a written option agreement to a developer: 'In consideration of $2,000 cash paid by Developer, I grant Developer the exclusive option to purchase Blackacre for $500,000, exercisable on or before April 1.' The developer paid the $2,000 cash on March 1. On March 15, the developer called the landowner and stated: 'The price is too high; I am not interested in Blackacre and reject your option.' The landowner replied: 'Understood.' On March 20, having analyzed new commercial zoning data, the developer sent a written notice of exercise along with a certified check for $500,000 to the landowner. The landowner received the letter on March 21, but refused to convey, stating that the option was terminated by the March 15 rejection. The landowner had not changed position or marketed the property between March 15 and March 21.",
        q: "Did the developer effectively exercise the option?",
        opts: [
            "No, because an oral rejection terminates an option contract immediately upon communication.",
            "Yes, because a rejection of an option contract does not terminate the power of acceptance unless the offeror materially relies on the rejection.",
            "No, because an optionee's rejection operates as a mutual rescission of the option agreement as a matter of law.",
            "Yes, because option contracts are completely irrevocable under all circumstances, even if the offeror detrimentally relies on a rejection."
        ],
        ans: 1,
        exp: "(B) is the best response, because under Restatement (Second) of Contracts § 37, a rejection of an option contract does not terminate the option unless the offeror materially relies on the rejection. Unlike an ordinary revocable offer (which terminates the instant a rejection is communicated), an option contract is an independent, executed contract supported by consideration. The optionee has purchased the absolute right to keep the offer open for the entire stated period. Therefore, a rejection or counteroffer made during the option period does not extinguish the power of acceptance UNLESS the offeror materially changes position in justifiable reliance on the rejection before an acceptance is received. Because the landowner took no action and did not change position between March 15 and March 21, the developer's written exercise on March 21 was timely and legally binding. (A) is incorrect because rejections do not terminate paid options absent material reliance. (C) is incorrect because a unilateral rejection is not a bilateral mutual rescission. (D) is incorrect because material detrimental reliance by the optionor will extinguish the optionee's rights under equitable estoppel principles."
    },
    {
        id: 15,
        topic: "Statute of Frauds / Goods Over $500 Quantity Term Requirement",
        fp: "A retail appliance dealer telephoned a manufacturer and orally ordered 50 commercial dishwashers at $600 each ($30,000 total). The manufacturer sent a signed written confirmation letter stating: 'We confirm your order for commercial dishwashers at $600 each, delivery in 30 days.' The letter completely omitted any quantity term. The dealer received the letter, noted the omitted quantity, but did not reply. Thirty days later, the manufacturer tendered 50 dishwashers to the dealer's warehouse. Due to a decline in retail sales, the dealer rejected the delivery, asserting the Statute of Frauds.",
        q: "Is the oral agreement enforceable against the dealer under UCC Article 2?",
        opts: [
            "Yes, because under UCC § 2-201(2), failure to object to a confirmatory memo between merchants satisfies the Statute of Frauds.",
            "No, because under UCC § 2-201(1), a writing is not sufficient unless it specifies a quantity term.",
            "Yes, because the price was agreed upon, and the court will supply a reasonable quantity as a gap-filler under UCC § 2-204.",
            "No, because oral agreements between merchants for goods exceeding $10,000 are void ab initio."
        ],
        ans: 1,
        exp: "(B) is the best response, because UCC § 2-201(1) explicitly requires a quantity term for a writing to satisfy the Statute of Frauds. Under UCC § 2-201(1), a contract for the sale of goods for $500 or more is not enforceable unless there is a writing sufficient to indicate that a contract for sale has been made. While the writing need not contain all terms (such as price, delivery, or warranties), the statute explicitly states: 'The contract is not enforceable under this paragraph beyond the quantity of goods shown in such writing'. Under UCC § 2-201, Official Comment 1, the ONLY term that must appear in the writing is the quantity term. Under UCC § 2-201(2) (the merchant's confirmatory memo rule), the confirmation must be 'sufficient against the sender' under subsection (1). Because the confirmation stated no quantity whatsoever, it was legally insufficient under § 2-201(1), rendering the oral contract unenforceable. (A) is incorrect because a confirmatory memo that omits a quantity term fails to satisfy the Statute of Frauds. (C) is incorrect because the UCC does not provide a gap-filler for quantity; the quantity must be stated. (D) is incorrect because the threshold is $500, not $10,000, and failure to satisfy the Statute of Frauds makes an agreement unenforceable, not void ab initio."
    },
    {
        id: 16,
        topic: "Performance / Express Condition of Financing (Bad Faith)",
        fp: "A buyer entered into a written contract to purchase an industrial warehouse from a seller for $1,000,000, closing scheduled for December 1. The contract contained the following provision: 'Buyer's obligation to close is expressly conditioned upon Buyer securing a commercial bank loan commitment of not less than $700,000 at an interest rate not exceeding 7% on or before November 15.' Following contract execution, the buyer found an alternative warehouse available for $850,000. The buyer submitted a loan application to a bank for $950,000 (rather than $700,000) at an interest rate of 5% (well below the 7% threshold), knowing that the bank would reject the application. The bank rejected the loan. The buyer submitted no other applications. On November 16, the buyer notified the seller that the financing condition had failed and that the contract was terminated. The seller sued for breach.",
        q: "May the buyer assert the failure of the financing condition as a defense?",
        opts: [
            "Yes, because express conditions precedent are strictly enforced according to their literal terms.",
            "No, because the buyer's bad-faith application for a loan exceeding the contract terms breached the duty of good faith, excusing the condition under the prevention doctrine.",
            "Yes, because the bank in fact rejected the loan application.",
            "No, because financing contingency clauses in commercial contracts are void per se under the Statute of Frauds."
        ],
        ans: 1,
        exp: "(B) is the best response, because the buyer's bad-faith conduct in applying for an unauthorized, excessive loan breached the implied duty of good faith, excusing the condition under the prevention doctrine (Restatement (Second) of Contracts § 245). Every contract imposes an implied duty of good faith and fair dealing. Where an obligor's duty to perform is subject to a condition precedent (such as securing a $700,000 mortgage at 7%), the obligor owes a duty of reasonable diligence to seek financing conforming to the contractual terms. Deliberately sabotaging the financing condition by applying for an excessive $950,000 loan at an unmarketable 5% rate to engineer a loan rejection constitutes bad-faith prevention. Under the prevention doctrine, wrongful hindrance or prevention of a condition excuses the condition. The condition is excused, and the buyer is in breach. (A) is incorrect because bad-faith prevention excuses strict compliance with an express condition. (C) is incorrect because an engineered rejection procured by the buyer's own bad faith does not excuse performance. (D) is incorrect because financing contingency clauses are fully valid."
    },
    {
        id: 17,
        topic: "Remedies / Expectation Damages for Lost Volume Broker",
        fp: "A licensed real estate broker entered into an exclusive right-to-sell listing agreement with a homeowner to market the owner's residence for $400,000 for six months. The agreement provided that the owner would pay the broker a 6% commission ($24,000) 'upon the broker producing a buyer ready, willing, and able to purchase the property on the listing terms.' Two months into the listing, the broker procured a prospective buyer who submitted a written, cash offer of $400,000 with no contingencies, ready to close within 30 days. The homeowner, having reconciled with his estranged spouse, decided not to sell the house, rejected the offer, and refused to pay the commission. The broker sued the homeowner for $24,000.",
        q: "Is the broker entitled to recover the $24,000 commission?",
        opts: [
            "No, because title to the property was never conveyed to the buyer.",
            "Yes, because the broker fully performed by producing a ready, willing, and able buyer on the terms specified in the contract.",
            "No, because real estate brokerage agreements are revocable at will by the property owner at any time prior to closing.",
            "Yes, but only in quantum meruit for the actual advertising expenses incurred by the broker."
        ],
        ans: 1,
        exp: "(B) is the best response, because the broker fully performed the agreed condition of the listing agreement by producing a ready, willing, and able buyer. Under the traditional common law rule governing real estate brokerage contracts, where an owner enters into an exclusive listing agreement promising to pay a commission upon the broker procuring a buyer 'ready, willing, and able' to purchase on the seller's stated terms, the broker's right to the commission becomes fully earned the instant such a buyer is procured. The owner's subsequent change of heart or arbitrary refusal to sell does not defeat the broker's earned commission, because an owner cannot prevent the closing and then rely on the lack of a closing to avoid payment. (A) is incorrect because under this contract, procuring the ready, willing, and able buyer completed the broker's performance; transfer of title was not made an express condition precedent to the commission. (C) is incorrect because exclusive listing contracts are binding contracts, not revocable at will after performance. (D) is incorrect because a broker who fully performs is entitled to expectation damages (the full commission), not merely reliance expenses."
    },
    {
        id: 18,
        topic: "Terms / Battle of the Forms Knockout Rule for Conflicting Terms",
        fp: "A computer retailer sent a purchase order to a monitor manufacturer for 200 high-resolution monitors at $200 each. The purchase order contained a pre-printed clause stating: 'Any legal action for breach of this contract must be commenced within three years of accrual.' The manufacturer sent back an acknowledgment form agreeing to all price and quantity terms, but containing a pre-printed clause stating: 'Any legal action for breach of this contract must be commenced within one year of delivery.' Both parties were merchants. The manufacturer shipped the monitors, and the retailer accepted and paid for them. Two years later, the monitors developed screen flicker due to a latent manufacturing defect, and the retailer sued the manufacturer for breach of warranty.",
        q: "Under the prevailing majority 'knockout rule' under UCC § 2-207, is the retailer's action time-barred?",
        opts: [
            "Yes, because the manufacturer's one-year limitation was an additional term that became part of the contract between merchants.",
            "No, because the conflicting limitations clauses knocked each other out and were replaced by the UCC four-year statutory limitations period.",
            "Yes, because the retailer accepted the goods with notice of the manufacturer's acknowledgment form.",
            "No, because contractual provisions altering statutory limitations periods are void per se under the UCC."
        ],
        ans: 1,
        exp: "(B) is the best response, because under the majority 'knockout rule' in UCC § 2-207 interpretations, conflicting terms cancel each other out and are replaced by UCC statutory gap-fillers. Where an acceptance contains a DIFFERENT term that directly conflicts with a term in the offer (here, a 3-year limitation vs. a 1-year limitation), the majority of jurisdictions apply the knockout rule. The conflicting clauses knock each other out of the contract entirely, leaving the agreement silent on that issue. The gap is then filled by the standard default statutory provisions of the UCC. Under UCC § 2-725(1), the default statute of limitations for breach of a sales contract is FOUR YEARS. Because the suit was brought within two years, it is timely under the four-year statutory gap-filler. (A) is incorrect because conflicting different terms do not enter automatically between merchants; they are knocked out. (C) is incorrect because accepting delivery forms a contract by conduct under § 2-207(3); it does not adopt the counter-term. (D) is incorrect because UCC § 2-725(1) permits parties to reduce the period of limitation to not less than one year by mutual agreement, but no mutual agreement was reached here."
    },
    {
        id: 19,
        topic: "Consideration / Output Contract Mutuality and Best Efforts",
        fp: "An organic vineyard entered into a written agreement with a boutique winery. The agreement provided: 'Vineyard agrees to sell, and Winery agrees to purchase, all the Pinot Noir grapes harvested by Vineyard from its Estate parcel during the upcoming season, estimated at 50 tons, at a fixed price of $2,000 per ton.' Due to an early spring frost that destroyed 60% of the vineyard's grape buds, the vineyard harvested only 20 tons of Pinot Noir grapes. The vineyard tendered all 20 tons to the winery. The winery refused to accept or pay for the 20 tons, asserting that the contract was unenforceable for lack of mutuality of obligation because the vineyard was not bound to produce any specific minimum quantity.",
        q: "Is the contract enforceable against the winery under UCC Article 2?",
        opts: [
            "No, because an output contract without an express minimum quantity is illusory.",
            "Yes, because under UCC § 2-306, an output contract is supported by consideration through the implied obligation of good faith and best efforts.",
            "No, because the 60% decline in grape harvest constituted an unreasonably disproportionate reduction as a matter of law.",
            "Yes, but only if the vineyard purchases 30 tons of replacement grapes on the open market."
        ],
        ans: 1,
        exp: "(B) is the best response, because UCC § 2-306 explicitly validates output contracts against illusory promise challenges by imposing an implied obligation of good faith and best efforts. Under UCC § 2-306(1), an output contract measures quantity by the actual good-faith output of the seller. Under UCC § 2-306(2), an exclusive output agreement imposes an implied obligation on the seller to use best efforts to supply the goods. This statutory obligation of good-faith best efforts provides mutuality of obligation and supplies valid consideration, defeating any claim that the agreement is illusory. Furthermore, under Official Comment 2, a seller who reduces output in good faith due to unexpected agricultural casualty (such as frost) does not breach. The winery is bound to accept and pay for the 20 tons. (A) is incorrect because UCC § 2-306 expressly validates output contracts lacking minimum quotas. (C) is incorrect because the 'unreasonably disproportionate' limitation restricts excessive increases, not good-faith agricultural curtailments. (D) is incorrect because the contract specified 'Estate' grapes, limiting performance to the seller's own harvest."
    },
    {
        id: 20,
        topic: "Defenses / Infancy Power of Disaffirmance",
        fp: "A 16-year-old minor purchased a high-performance racing motorcycle from a motorcycle dealership for $6,000 cash. The minor rode the motorcycle for six months. While riding on a public highway, the minor negligently collided with a guardrail, causing extensive damage that reduced the motorcycle's fair market value to $1,500. The minor was uninjured. Two weeks later, the minor returned the wrecked motorcycle to the dealership, announced that he was disaffirming the contract based on his minority, and demanded the refund of his entire $6,000 purchase price. The dealership refused to refund more than the $1,500 residual value of the motorcycle. The minor sued the dealership for $6,000.",
        q: "In a traditional common law jurisdiction, what amount is the minor entitled to recover?",
        opts: [
            "$1,500, representing the fair market value of the returned motorcycle.",
            "$6,000, representing the full purchase price without deduction for depreciation or damage.",
            "Nothing, because a minor cannot disaffirm a fully executed cash contract.",
            "$4,500, representing the purchase price minus the cost of repairs."
        ],
        ans: 1,
        exp: "(B) is the best response, because under the traditional majority common law rule, a minor who disaffirms a contract is entitled to the return of the full consideration paid upon restoring whatever remains of the chattel, without deduction for depreciation, use, or damage. Under traditional common law infancy doctrine (Restatement (Second) of Contracts § 14), a minor possesses the absolute legal power to disaffirm a non-necessary contract during minority or within a reasonable time after reaching majority. Upon disaffirmance, the minor is required only to return whatever portion of the consideration remains in his hands; the minor is NOT liable for depreciation, wear and tear, or damage caused by his own ordinary negligence during operation. The dealership must refund the full $6,000 cash purchase price. (Note: While a growing modern minority of states requires deduction for depreciation or reasonable rental value, on the multistate bar exam, the traditional majority rule governs unless the question specifies modern statutory modifications). (A) is incorrect because traditional common law does not offset the minor's recovery by depreciation or damage. (C) is incorrect because minors can disaffirm fully executed contracts. (D) is incorrect because the minor is not liable for repair costs."
    },
    {
        id: 21,
        topic: "Excuse / Accord and Satisfaction by Compromise Check",
        fp: "An interior designer decorated a corporate boardroom and submitted an invoice for $15,000. The corporation's president sent a letter stating in good faith: 'Your work was substandard, and you installed inferior drapes; I will pay no more than $9,000.' The letter enclosed a corporate check for $9,000. Typed across the top of the check and on the endorsement voucher was the conspicuous statement: 'Tendered in full and final satisfaction of all design claims.' The designer read the voucher, crossed out the words 'full and final satisfaction,' wrote 'Under Protest—All Rights Reserved for $6,000 Balance' above her signature, and cashed the check. The check was honored by the bank. The designer then sued the corporation for the $6,000 balance.",
        q: "Is the designer entitled to recover the $6,000 balance?",
        opts: [
            "Yes, because the designer's reservation of rights preserved her cause of action under UCC § 1-308.",
            "No, because cashing a check conspicuously tendered in full settlement of a bona fide disputed claim operates as an accord and satisfaction under UCC § 3-311.",
            "Yes, because the pre-existing duty rule prohibits discharging a debt without full payment.",
            "No, because the designer committed a fraudulent conversion by crossing out the check endorsement."
        ],
        ans: 1,
        exp: "(B) is the best response, because the designer's act of cashing the full-satisfaction check discharged the debt by accord and satisfaction under UCC § 3-311. Under UCC § 3-311, if a debtor tenders a negotiable instrument in good faith to a creditor with a conspicuous notation that it is in full satisfaction of an unliquidated or bona fide disputed claim, and the creditor obtains payment, the claim is DISCHARGED. A creditor cannot avoid an accord and satisfaction by scratching out the full-payment phrase or writing 'under protest' or 'all rights reserved'. If the creditor does not wish to accept the compromise settlement, her only legal option is to return the check; once she cashes it, she is bound by the accord and satisfaction as a matter of law. (A) is incorrect because UCC § 1-308(b) explicitly states that reservation-of-rights notations do not apply to an accord and satisfaction. (C) is incorrect because compromising an unliquidated or disputed claim provides valid consideration. (D) is incorrect because striking out endorsement text is not criminal conversion, but it is legally ineffective to avoid discharge."
    },
    {
        id: 22,
        topic: "Formation / UCC 2-206 Prompt Shipment of Nonconforming Goods",
        fp: "A restaurant owner sent a signed purchase order to a seafood distributor: 'Please ship immediately 100 pounds of Grade-A fresh Atlantic sea scallops at your current catalog price of $20 per pound.' The distributor's fresh sea scallops were out of stock. The distributor packaged and shipped 100 pounds of frozen bay scallops (priced at $12 per pound). The distributor included no letter, message, or notice of accommodation. When the shipment arrived, the restaurant owner needed scallops for dinner service, accepted the bay scallops, and used them in cooking. The restaurant owner tendered a check for $1,200 ($12 per pound) and sued the distributor for $800 in damages for breach of contract.",
        q: "What is the legal effect of the distributor's shipment of the bay scallops?",
        opts: [
            "It operated as a counteroffer that the restaurant owner accepted by using the scallops, forming a contract for bay scallops at $1,200.",
            "It operated as an acceptance of the purchase order and an immediate breach of contract, entitling the owner to accept the goods and recover breach damages.",
            "It formed no contract because the nonconforming shipment was an accommodation under UCC § 2-206.",
            "It operated as a rejection of the offer that relieved the distributor of all contractual liability."
        ],
        ans: 1,
        exp: "(B) is the best response, because under UCC § 2-206(1)(b), the prompt shipment of nonconforming goods constitutes an acceptance and immediate breach unless accompanied by a notice of accommodation. Under UCC § 2-206(1)(b), an order to buy goods for prompt shipment invites acceptance either by prompt shipment or promise to ship. Shipping nonconforming goods without a seasonable notice of accommodation constitutes an acceptance (forming a contract for the ordered sea scallops) and an immediate breach. Under UCC § 2-601 and § 2-714, the buyer may accept the nonconforming goods, notify the seller of breach, and recover damages for the nonconformity. (A) is incorrect because a shipment of nonconforming goods operates as a counteroffer ONLY if the seller seasonably notifies the buyer that it is offered as an accommodation. (C) is incorrect because accommodation status requires explicit seasonable notice. (D) is incorrect because unannounced nonconforming shipments are acceptances and breaches, not rejections."
    },
    {
        id: 23,
        topic: "Remedies / Consequential Damages Foreseeability Limitation",
        fp: "A manufacturer of high-end consumer fireworks contracted with a transportation trucking company to transport 20 crates of display fireworks from its warehouse to a municipal waterfront site for a Fourth of July civic display. The transportation fee was $500. The contract provided that delivery must occur on or before July 3. The trucking company delivered the fireworks on July 5 (two days late). The municipality had canceled the display and refused to pay the manufacturer its $50,000 display fee. The manufacturer had not informed the trucking company that the fireworks were for a specific municipal holiday celebration or that late delivery would result in cancellation of a $50,000 contract. The manufacturer sued the trucking company for $50,000 in consequential damages.",
        q: "Is the manufacturer entitled to recover the $50,000 lost contract fee from the trucking company?",
        opts: [
            "Yes, because the trucking company was in material breach of contract for late delivery.",
            "No, because the trucking company had no reason to foresee the special circumstances or the loss of the $50,000 municipal fee at the time of contracting.",
            "Yes, because commercial motor carriers are strictly liable for all consequential losses resulting from delivery delays.",
            "No, because consequential damages cannot be recovered in transportation contracts as a matter of law."
        ],
        ans: 1,
        exp: "(B) is the best response, because the consequential damages were not reasonably foreseeable to the carrier under the rule of Hadley v. Baxendale and Restatement (Second) of Contracts § 351. Under Hadley v. Baxendale, damages for breach of contract are limited to those that arise naturally in the ordinary course of events, or those that arise from special circumstances of which the breaching party had reason to know at the time the contract was made. In carrier delay cases, late delivery of cargo does not naturally result in the total cancellation of a lucrative underlying third-party contract unless the shipper explicitly communicates those special circumstances to the carrier at contract formation. Because the manufacturer never told the carrier that late delivery would forfeit a $50,000 municipal contract, the lost profits were unforeseeable and cannot be recovered. (A) is incorrect because breach alone does not make unforeseeable consequential damages recoverable. (C) is incorrect because carriers are not strictly liable for unforeseeable consequential lost profits. (D) is incorrect because consequential damages can be recovered in transportation contracts if proper notice is given at formation."
    },
    {
        id: 24,
        topic: "Statute of Frauds / UCC 2-201 Judicial Admission Exception",
        fp: "A restaurant owner orally agreed over the telephone to purchase 100 cases of specialty olive oil from an importer for $8,000 ($80 per case). The importer did not send a written confirmation, and no writing was signed by the restaurant owner. When the importer tendered the 100 cases of olive oil, the restaurant owner refused to accept or pay for them, asserting the Statute of Frauds. The importer sued the restaurant owner for breach of contract. In his formal, signed answer filed in court and during his subsequent deposition under oath, the restaurant owner admitted: 'I had a telephone conversation with the importer and orally agreed to buy 100 cases of olive oil at $80 per case, but our agreement was oral and is unenforceable under the Statute of Frauds.'",
        q: "Is the oral contract enforceable against the restaurant owner under UCC Article 2?",
        opts: [
            "No, because contracts for the sale of goods for $500 or more require an extrinsic signed writing executed prior to litigation.",
            "Yes, because under UCC § 2-201(3)(b), an oral contract is enforceable if the party against whom enforcement is sought admits in his pleading or testimony that a contract was made.",
            "No, because a party may plead the Statute of Frauds as an affirmative defense without forfeiting its protections through factual admissions.",
            "Yes, because oral contracts between restaurant merchants are exempt from the Statute of Frauds."
        ],
        ans: 1,
        exp: "(B) is the best response, because the restaurant owner's formal admission in his pleading and deposition satisfied the judicial admission exception of UCC § 2-201(3)(b). Under UCC § 2-201(3)(b), an oral contract for the sale of goods for $500 or more that fails to satisfy the writing requirement is nonetheless enforceable 'if the party against whom enforcement is sought admits in his pleading, testimony or otherwise in court that a contract for sale was made' (enforceable up to the quantity admitted). The restaurant owner formally admitted in his court pleading and deposition testimony that he agreed to purchase 100 cases at $80 per case. This in-court admission removes the Statute of Frauds bar, making the oral contract fully enforceable for all 100 cases. (A) is incorrect because UCC § 2-201(3)(b) is an express statutory exception to the writing requirement. (C) is incorrect because admitting the contract in court waives the Statute of Frauds defense under the UCC. (D) is incorrect because merchants are fully subject to the Statute of Frauds."
    },
    {
        id: 25,
        topic: "Excuse / Impracticability Due to Government Regulation",
        fp: "A fireworks manufacturer entered into a written contract with an amusement park to design, manufacture, and deliver 500 commercial aerial display mortars for $100,000, delivery scheduled on June 15. On May 1, the federal Consumer Product Safety Commission enacted an emergency federal administrative regulation with immediate nationwide effect that banned the manufacture, transportation, sale, and commercial use of the specific chemical flash powders required to fabricate the contracted display mortars. Fulfilling the contract became illegal under federal criminal law. The manufacturer notified the amusement park that its performance was discharged. The amusement park sued for breach of contract.",
        q: "Is the manufacturer's performance excused under contract law?",
        opts: [
            "No, because commercial manufacturers assume the risk of administrative regulatory changes.",
            "Yes, under the doctrine of supervening illegality and objective impossibility under Restatement (Second) of Contracts § 264.",
            "No, because the amusement park did not consent to a modification or discharge of the contract.",
            "Yes, but only under UCC § 2-615 if the manufacturer pays reliance damages to the amusement park."
        ],
        ans: 1,
        exp: "(B) is the best response, because supervening government regulation making performance illegal discharges contractual duties under Restatement (Second) of Contracts § 264 and UCC § 2-615. Under Restatement § 264 and UCC § 2-615(a), if the performance of a duty is made impracticable or illegal by having to comply with a supervening governmental regulation or order, the non-occurrence of which was a basic assumption on which the contract was made, the duty is discharged under the doctrine of supervening illegality/impossibility. When federal regulators banned the chemical flash powder required to make the mortars, physical and legal performance became objectively impossible. The manufacturer is fully excused from performance and is not liable for breach damages. (A) is incorrect because unprecedented, emergency criminal statutory bans are not ordinary assumed business risks. (C) is incorrect because discharge by operation of law occurs without requiring the obligee's consent. (D) is incorrect because discharge for supervening illegality excuses performance without requiring payment of reliance damages."
    }
];