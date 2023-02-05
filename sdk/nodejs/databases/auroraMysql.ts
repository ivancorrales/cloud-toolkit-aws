// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as enums from "../types/enums";
import * as utilities from "../utilities";

import * as pulumiAws from "@pulumi/aws";
import * as pulumiRandom from "@pulumi/random";

export class AuroraMysql extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'cloud-toolkit-aws:databases:AuroraMysql';

    /**
     * Returns true if the given object is an instance of AuroraMysql.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AuroraMysql {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AuroraMysql.__pulumiType;
    }

    /**
     * CloudWatch alarms that monitor the RDS Cluter
     */
    public /*out*/ readonly alarms!: pulumi.Output<pulumiAws.cloudwatch.MetricAlarm[]>;
    /**
     * The RDS Cluster
     */
    public /*out*/ readonly cluster!: pulumi.Output<pulumiAws.rds.Cluster>;
    /**
     * Cluster instances associated to the cluster
     */
    public /*out*/ readonly instances!: pulumi.Output<pulumiAws.rds.ClusterInstance[]>;
    /**
     * Random password generated for admin user
     */
    public /*out*/ readonly password!: pulumi.Output<pulumiRandom.RandomPassword>;
    /**
     * Component that protects and stores admin password in AWS
     */
    public /*out*/ readonly secret!: pulumi.Output<pulumiAws.secretsmanager.Secret>;
    /**
     * Component that protects and stores admin password in AWS
     */
    public /*out*/ readonly secretVersion!: pulumi.Output<pulumiAws.secretsmanager.SecretVersion>;
    /**
     * The SecurityGroup associated to the cluster to manage traffic
     */
    public /*out*/ readonly securityGroup!: pulumi.Output<pulumiAws.ec2.SecurityGroup>;
    /**
     * The rules associated SecurityGroup to allow incoming traffic
     */
    public /*out*/ readonly securityGroupRule!: pulumi.Output<pulumiAws.ec2.SecurityGroupRule>;
    /**
     * The SubnetGroup that reprents the list of subnets where the cluster is deployed
     */
    public /*out*/ readonly subnetGroup!: pulumi.Output<pulumiAws.rds.SubnetGroup | undefined>;
    /**
     * SNS Topic used for CloudWatch alerts
     */
    public /*out*/ readonly topic!: pulumi.Output<pulumiAws.sns.Topic | undefined>;
    /**
     * TopicSubscriptions to alerts by email
     */
    public /*out*/ readonly topicSubscriptions!: pulumi.Output<pulumiAws.sns.TopicSubscription[]>;

    /**
     * Create a AuroraMysql resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AuroraMysqlArgs, opts?: pulumi.ComponentResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["backup"] = args ? args.backup : undefined;
            resourceInputs["database"] = args ? args.database : undefined;
            resourceInputs["instanceType"] = args ? args.instanceType : undefined;
            resourceInputs["instancesCount"] = args ? args.instancesCount : undefined;
            resourceInputs["logging"] = args ? args.logging : undefined;
            resourceInputs["monitoring"] = args ? args.monitoring : undefined;
            resourceInputs["networking"] = args ? args.networking : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["alarms"] = undefined /*out*/;
            resourceInputs["cluster"] = undefined /*out*/;
            resourceInputs["instances"] = undefined /*out*/;
            resourceInputs["password"] = undefined /*out*/;
            resourceInputs["secret"] = undefined /*out*/;
            resourceInputs["secretVersion"] = undefined /*out*/;
            resourceInputs["securityGroup"] = undefined /*out*/;
            resourceInputs["securityGroupRule"] = undefined /*out*/;
            resourceInputs["subnetGroup"] = undefined /*out*/;
            resourceInputs["topic"] = undefined /*out*/;
            resourceInputs["topicSubscriptions"] = undefined /*out*/;
        } else {
            resourceInputs["alarms"] = undefined /*out*/;
            resourceInputs["cluster"] = undefined /*out*/;
            resourceInputs["instances"] = undefined /*out*/;
            resourceInputs["password"] = undefined /*out*/;
            resourceInputs["secret"] = undefined /*out*/;
            resourceInputs["secretVersion"] = undefined /*out*/;
            resourceInputs["securityGroup"] = undefined /*out*/;
            resourceInputs["securityGroupRule"] = undefined /*out*/;
            resourceInputs["subnetGroup"] = undefined /*out*/;
            resourceInputs["topic"] = undefined /*out*/;
            resourceInputs["topicSubscriptions"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AuroraMysql.__pulumiType, name, resourceInputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a AuroraMysql resource.
 */
export interface AuroraMysqlArgs {
    /**
     * Backup configuration parameters for Aurora cluster
     */
    backup?: pulumi.Input<inputs.databases.AuroraMysqlBackupArgs>;
    /**
     * Configuration parameters for the database
     */
    database?: pulumi.Input<inputs.databases.AuroraMysqlDatabaseArgs>;
    /**
     * The instance type for the cluster
     */
    instanceType?: pulumi.Input<string>;
    /**
     * The number of instances to be created for Aurora cluster
     */
    instancesCount?: pulumi.Input<number>;
    /**
     * Logging configuration parameters for Aurora cluster
     */
    logging?: pulumi.Input<inputs.databases.AuroraMysqlLoggingArgs>;
    /**
     * Monitoring configuration parameters for Aurora cluster
     */
    monitoring?: pulumi.Input<inputs.databases.AuroraMysqlMonitoringArgs>;
    /**
     * Networking configuration parameters for Aurora cluster
     */
    networking?: pulumi.Input<inputs.databases.AuroraMysqlNetworkingArgs>;
    /**
     * Version for database
     */
    version?: pulumi.Input<enums.databases.AuroraMysqlVersion>;
}
